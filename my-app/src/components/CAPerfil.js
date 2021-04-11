import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import axios from 'axios'




class ExerciseList extends React.Component{
   
    state = {
        nombre_curso: [],
    };
    
    state = {
        data:
        [{ creditos: 4,
        nombre_curso: "IPC1",
        id_publicacion: 1}]
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
                <div>  <h1>Cursos Aprobados</h1></div>

            <TableContainer>
                <Table> 
                    <TableHead>
                        <TableRow>
                            <TableCell>Curso</TableCell>
                            <TableCell>Creditos</TableCell>
                        </TableRow>
                    </TableHead> 

                    <TableBody>
                    {this.state.data.map((data)=>(
                        <TableRow>
                        <TableCell>{data.nombre_curso}</TableCell>
                        <TableCell>{data.creditos}</TableCell>
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
