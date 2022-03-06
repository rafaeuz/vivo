import React from "react";
import Stack from '@mui/material/Stack';
import { Paper } from "@mui/material";

export default function Header({ children }) {
    return (
        <div>
            <Paper elevation={12}>
            <Stack direction="column" justifyContent = "space-between" alignItems = "left" backgroundColor = "#660099">
                <h1 style={{fontSize: 33, color:"white", marginTop: "18px", marginLeft: "10px", fontFamily: "helvetica"}}>Clientes</h1>
            </Stack>
            </Paper>
            { children } 
        </div>       
    );
}