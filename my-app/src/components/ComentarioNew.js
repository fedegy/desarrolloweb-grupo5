import React from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';


const ComentariosList = ({exercises}) => (  
    <TableBody>
        {exercises.map((exercese)=> (
                     <TableRow>
                     <TableCell>{exercese.Registro}</TableCell>
                     <TableCell>{exercese.Descripcion}</TableCell>
                     </TableRow>
        ))}
 </TableBody>
)

export default ComentariosList