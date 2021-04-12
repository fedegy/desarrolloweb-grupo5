import React from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';

function ComentariosList({Registro,Descripcion})  { 

    return(
        
        <TableRow>
        <TableCell>{Registro}</TableCell>
        <TableCell>{Descripcion}</TableCell>
        </TableRow>

    )}

export default ComentariosList