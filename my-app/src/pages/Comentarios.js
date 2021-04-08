import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';

const data= [
    {artista: 'mario', pais: 'hols'},
    {artista: 'luiguie', pais: 'irlanda'}
];

const ExerciseList = () => {

    return(
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Artista</TableCell>
                            <TableCell>Pais</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map(celda=>(
                        <TableRow>
                        <TableCell>{celda.artista}</TableCell>
                        <TableCell>{celda.pais}</TableCell>
                        </TableRow>
                    ))}

                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default ExerciseList