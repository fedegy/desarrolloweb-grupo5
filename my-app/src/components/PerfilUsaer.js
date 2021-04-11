import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import axios from 'axios'




class ExerciseList extends React.Component{
   
    state = {
        nombre_curso: [],
    };
    
    state = {
        creditos: 1,
        data:
        [{ Registro: 20,
        nombres: "Sergie",
        apellidos: "arizandieta",
        correo:"gmials"}]
    }

  
    componentDidMount() {

        axios
          .get("http://localhost:3001/ver_coemntarios")
          .then((response) => {
            console.log(response);
            this.setState({ /*data: response.data */});
          })
          .catch((error) => {
            console.log(error);
          });
      }
    render(){ 
     
    return(
        <div>
              

            <TableContainer>
                <Table> 
                    <TableHead>
                        <TableRow>
                        <TableCell>Carnet </TableCell>
                            <TableCell>Nombre </TableCell>
                            <TableCell>Apellido </TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Creditos</TableCell>
                        </TableRow>
                    </TableHead> 

                    <TableBody>
                    {this.state.data.map((data)=>(
                        <TableRow>
                        <TableCell>{data.Registro}</TableCell>
                        <TableCell>{data.nombres}</TableCell>
                        <TableCell>{data.apellidos}</TableCell>
                        <TableCell>{data.correo}</TableCell>
                        <TableCell>{this.state.creditos}</TableCell>
                        </TableRow>
                    ))} 
                   
                   
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}
}

export default ExerciseList
