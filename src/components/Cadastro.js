import React, {useState, useRef, useEffect} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Cadastro() {

    const dummyData = [["123.456.789-0", "Ana Beatriz", "(11)1234-5678"], 
                    ["234.567.890-1", "Beatriz Carolina", "(11)1234-5678"],
                    ["345.678.901-2", "Carolina Ana", "(11)1234-5678"]];

    return (
        <div>
            <h2>Buscar Cliente:</h2>
            
            {/* <SortableList items={resultados} onSortEnd={onSortEnd} ></SortableList> */}
            <TextField  type="text" id="buscaCPF" onKeyUp={()=>buscarCPF()} placeholder="Buscar por CPF" title="Busca por CPF" sx = {{m:1, width:"200px"}}/>
            <TextField  type="text" id="buscaNome" onKeyUp={()=>buscarNome()} placeholder="Buscar por nome" title="Busca por nome" sx = {{m:1, width:"500px"}}/>
            <Button
                type="submit"
               
                variant="contained"
                sx={{ m: 2, backgroundColor: "#660099", ':hover':{backgroundColor: "#660099"} }}
                onClick={() => {adicionar()}}
                           >
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
                        {dummyData.map((header,index)=>
                        <TableRow>
                            <TableCell key= {header[0]+index} style={ {position: "sticky", left: "0",  backgroundColor: "white"} }>{header[0]}</TableCell>
                            {header.slice(1).map((value, index2)=>
                            <TableCell key={index.toString()+index2.toString()}> 
                                {value}
                            </TableCell> 
                            )}
                        </TableRow>
                    )}             
                </Table>
            </TableContainer>
        
        <h2>Cadastrar Cliente: </h2>
        <TextField
        //  autoFocus
        //   onChange={handleUserInput}
          label="CPF"
          id="box-cpf"
          sx={{ m: 1, width: '200px' }}/>
        <TextField
          label="Nome"
          id="box-nome"
          sx={{ m: 1, width: '500px' }}/>
         <TextField
          label="Telefone"
          id="box-telefone"
          sx={{ m: 1, width: '200px' }}/>

        <Button
                type="submit"
               
                variant="contained"
                sx={{ m: 2, backgroundColor: "#660099", ':hover':{backgroundColor: "#660099"} }}
                onClick={() => {adicionar()}}
                           >
                Cadastrar
                
        </Button>
        </div>       
    );


    function buscarNome() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tabela");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }   
    }

    function buscarCPF() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tabela");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }   
    }

    function adicionar() {
  
        // let x = resultados;
        // // let y = resultadosD;
        // // y[valor]=result;
        // // y["unidade"+valor]=unidade;
        // // setResultadosD(y)
        // // console.log(y);
        // if (result !== "" && valor !== null && unidade !== null){
        //   x.push([valor,result, unidade]);
        //   x.sort()
        //   setResultados(x);
        //   // console.log(resultados);
        //   setView(true);
        //   setResult("");
        //   setClear(!clear);
        //   setUnidade(null);
        //   examesRef.current.focus();


        // }
    }
}