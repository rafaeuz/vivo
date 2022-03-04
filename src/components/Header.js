import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";

export default function Header({ children }) {
    return (
        <div>
            <Paper elevation={12}>
            <Stack direction="column" justifyContent = "space-between" alignItems = "left" backgroundColor = "#660099">
                <h1 style={{fontSize: 33, color:"white", marginTop: "11px", marginLeft: "10px"}}>Clientes</h1>
                {/* <Button style={{color: "white"}}>Cadastro</Button>     
                <Button style={{color: "white"}}>Consulta</Button>           */}
            </Stack>
            </Paper>
            { children } 
        </div>       
    );
}

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#fff',
//         },
//     },
// });  