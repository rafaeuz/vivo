import React, {useState} from "react"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ClienteService from "../API/ClienteService";


export default function Cadastro() {
    const [bcpf, setBcpf] = useState(); // valor do cpf no campo Busca
    const [ccpf, setCcpf] = useState(); // valor do cpf no campo Cadastrar
    const [ctel, setCtel] = useState(); // valor do telefone
    const [nome, setNome] = useState();
    const [clientes, setClientes] = useState([]);

    const getClientes = () => {
        if (bcpf === '' || bcpf === undefined) {
            ClienteService.getClientes().then((response) => {
                setClientes(response.data.sort(function(a, b) {
                    var nameA = a["nome"].toUpperCase();
                    var nameB = b["nome"].toUpperCase();
                    if(nameA < nameB) return -1;
                    if(nameA > nameB) return 1;
                    return 0;
                })) 
            });
        }
        else if (bcpf.length === 14) {
            let bcpf2 = bcpf.split('.').join("").split('-').join("");
            ClienteService.getCliente(bcpf2).then((response) => {
                setClientes(response.data)});
        }
        else {
            alert("CPF inválido");
        }

    }

    const postCliente = () => {
         if (ccpf.length === 14 && ctel.length === 15 && nome !== undefined && nome !== '') {
            let ccpf2 = ccpf.split('.').join("").split('-').join("");
            let novoCliente = {"cpf": ccpf2, "nome": nome, "telefone": ctel };
            ClienteService.postCliente(novoCliente);
            alert("Dados do cliente cadastrados / atualizados com sucesso");
            setCcpf(''); setNome(''); setCtel('');
        }
        else if (ccpf.length !== 14 && ctel.length !== 15 && nome !== undefined && nome !== '') {
            alert("CPF e Telefone inválidos");
        }
        else if (ccpf.length === 14 && ctel.length !== 15) {
            alert("Telefone inválido, inclua o DDD com 2 dígitos e o telefone com 9 dígitos");
        }
        else if (ccpf.length !== 14 && ctel.length === 15) {
            alert("CPF inválido");
        }   
        else {
            alert("Preencha todos os dados para cadastrar / atualizar o cliente");
        }
    };

    return (
        <div>
            <h2>Buscar Cliente:</h2>   
            <TextField  value = {bcpf}
                        type="text" label="Buscar por CPF" id="buscaCPF"  
                        placeholder="Buscar por CPF" title="Busca por CPF" 
                        sx = {{m:1, width:"200px"}}
                        onChange={(e) => handleCPF(e, setBcpf)}          
            />

            <Button type="submit"          
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "#660099", ':hover':{backgroundColor: "#660099"} }}
                    onClick={() => {getClientes()}}> Buscar
            </Button>
         
            <TableContainer sx={{ maxHeight: 300, maxWidth: "80%"}} >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell key="CPF" sx={{position:"sticky",  left: "0px", zIndex: "3", backgroundColor: "white", fontWeight: "bold" }}> CPF  </TableCell>
                            <TableCell key="nome" sx={{position:"sticky",  left: "0px", zIndex: "3", backgroundColor: "white", fontWeight: "bold" }}>Nome</TableCell>
                            <TableCell key="telefone" sx={{position:"sticky",  left: "0px", zIndex: "3", backgroundColor: "white", fontWeight: "bold" }}> Telefone  </TableCell>
                        </TableRow>           
                    </TableHead>
                        
                    {clientes.map((cliente, index)=>
                        <TableRow>
                            <TableCell style={ {position: "sticky", left: "0",  backgroundColor: "white"} }>{cliente['cpf'].replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4')}</TableCell>
                            <TableCell style={ {position: "sticky", left: "0",  backgroundColor: "white"} }>{cliente['nome']}</TableCell>
                            <TableCell style={ {position: "sticky", left: "0",  backgroundColor: "white"} }>{cliente['telefone'].replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3')}</TableCell>
                        </TableRow>)
                    }
                </Table>
            </TableContainer>
        
            <h2>Cadastrar Cliente: </h2>
            <TextField  value = {ccpf}
                        label="CPF"
                        id="box-cpf"
                        sx={{ m: 1, width: '200px' }}
                        onChange={(e) => handleCPF(e, setCcpf)}
            />
    
            <TextField  
                        value = {nome}
                        label="Nome"
                        id="box-nome"
                        sx={{ m: 1, width: '500px' }}
                        onChange={(e) => setNome(e.target.value)}
            />
            
            <TextField  value = {ctel}
                        label="Telefone"
                        id="box-telefone"
                        sx={{ m: 1, width: '200px' }}
                        onChange={(e) => handleTelefone(e)}
            />

            <Button type="submit"    
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "#660099", ":hover":{backgroundColor: "#660099"} }}
                    onClick={() => {postCliente()}}> Cadastrar       
            </Button>
        </div>       
    );

    function handleCPF(e, set) {
        let onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 11) {
            set(onlyNums);
        } else if (onlyNums.length === 11) {
            let number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4');
            set(number);
        }
    }

    function handleTelefone(e) {
        let onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 11) {
            setCtel(onlyNums);
        } else if (onlyNums.length === 11) {
            let number = onlyNums.replace(
                /(\d{2})(\d{5})(\d{4})/,
                '($1) $2-$3');
            setCtel(number);
        }
    }   
}