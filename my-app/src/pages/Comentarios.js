import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';



const ExerciseList = (datos) => {
    const data= datos
    return(
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Comentario</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {data.map(celda=>(
                        <TableRow>
                        <TableCell>{celda.Registro}</TableCell>
                        <TableCell>{celda.Descripcion}</TableCell>
                        </TableRow>
                    ))}

                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default ExerciseList