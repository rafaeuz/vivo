import React, {useState, useRef, useEffect} from "react"
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ClienteService from "../API/ClienteService";


export default function Cadastro() {
    const [bcpf, setBcpf] = useState();
    const [ccpf, setCcpf] = useState();
    const [ctel, setCtel] = useState();

    const [clientes, setClientes] = useState([]);

    const getClientes = () => {
        ClienteService.getClientes().then((response) => {
            setClientes(response.data.sort(function(a, b) {
                var nameA = a["nome"].toUpperCase();
                var nameB = b["nome"].toUpperCase();
                if(nameA < nameB) return -1;
                if(nameA > nameB) return 1;
                return 0;
            })) 
        });
    };

    const novoCliente = {"cpf": "36925814700", "nome": "Nikola Tesla", "telefone": "11966669876" };

    const postCliente = (novoCliente) => {
        ClienteService.postCliente(novoCliente);
    };

    return (
        <div>
            <h2>Buscar Cliente:</h2>   
          
     
            <TextField  value = {bcpf}
                        type="text" label="Buscar por CPF" id="buscaCPF"  
                        placeholder="Buscar por CPF" title="Busca por CPF" 
                        sx = {{m:1, width:"200px"}}
                        onChange={(e) => handleBCPF(e)}          
                        />
            <TextField  type="text" label="Buscar por Nome" id="buscaNome"  placeholder="Buscar por nome" title="Busca por nome" sx = {{m:1, width:"500px"}}/>
            <Button
                type="submit"          
                variant="contained"
                sx={{ m: 2, backgroundColor: "#660099", ':hover':{backgroundColor: "#660099"} }}
                onClick={() => {getClientes()}}>
                Buscar
            </Button>

            <TableContainer sx={{ maxHeight: 440, maxWidth: "80%"}} >
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
            <TextField
                value = {ccpf}
                label="CPF"
                id="box-cpf"
                sx={{ m: 1, width: '200px' }}
                onChange={(e) => handleCCPF(e)}
            />
    
            <TextField
                label="Nome"
                id="box-nome"
                sx={{ m: 1, width: '500px' }}
            />
            
            <TextField
                value = {ctel}
                label="Telefone"
                id="box-telefone"
                sx={{ m: 1, width: '200px' }}
                onChange={(e) => handleTelefone(e)}
            />

            <Button type="submit"    
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "#660099", ":hover":{backgroundColor: "#660099"} }}
                    onClick={() => {postCliente(novoCliente)}}>
                    Cadastrar       
            </Button>
        </div>       
    );



    function handleBCPF(e) {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 11) {
            setBcpf(onlyNums);
        } else if (onlyNums.length === 11) {
            const number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4');
            setBcpf(number);
        }
    }

    function handleCCPF(e) {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 11) {
            setCcpf(onlyNums);
        } else if (onlyNums.length === 11) {
            const number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/,
                '$1.$2.$3-$4');
            setCcpf(number);
        }
    }


    
    function handleTelefone(e) {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 11) {
            setCtel(onlyNums);
        } else if (onlyNums.length === 11) {
            const number = onlyNums.replace(
                /(\d{2})(\d{5})(\d{4})/,
                '($1) $2-$3');
            setCtel(number);
        }
    }
    
    
     function buscarNome() {
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = document.getElementById("myInput");
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("tabela");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //       td = tr[i].getElementsByTagName("td")[0];
    //       if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //           tr[i].style.display = "";
    //         } else {
    //           tr[i].style.display = "none";
    //         }
    //       }
    //     }   
     }

     function buscarCPF() {
    //     var input, filter, table, tr, td, i, txtValue;
    //     input = document.getElementById("myInput");
    //     filter = input.value.toUpperCase();
    //     table = document.getElementById("tabela");
    //     tr = table.getElementsByTagName("tr");
    //     for (i = 0; i < tr.length; i++) {
    //       td = tr[i].getElementsByTagName("td")[0];
    //       if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //           tr[i].style.display = "";
    //         } else {
    //           tr[i].style.display = "none";
    //         }
    //       }
    //     }   
     }

     function adicionar() {  
    //     // let x = resultados;
    //     // // let y = resultadosD;
    //     // // y[valor]=result;
    //     // // y["unidade"+valor]=unidade;
    //     // // setResultadosD(y)
    //     // // console.log(y);
    //     // if (result !== "" && valor !== null && unidade !== null){
    //     //   x.push([valor,result, unidade]);
    //     //   x.sort()
    //     //   setResultados(x);
    //     //   // console.log(resultados);
    //     //   setView(true);
    //     //   setResult("");
    //     //   setClear(!clear);
    //     //   setUnidade(null);
    //     //   examesRef.current.focus();
    //     // }
     }

     
}