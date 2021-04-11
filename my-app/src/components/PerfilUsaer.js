/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import axios from 'axios'
import Cookies from 'universal-cookie'


global.creditosIn=''
class ExerciseList extends React.Component{
   
    state = {
        nombre_curso: [],
    };
    
    state = {
        creditos: [],
        credIndividual:'',
        data:
        []
    }

  
    //-------------------------------------------
componentDidMount(){
   
    const cookies = new Cookies()
       
       // eslint-disable-next-line react/no-direct-mutation-state
       this.state = {
           carnet_login_get:  cookies.get('idRegistroBusqueda')
       }


       axios.post("http://localhost:3001/BusquedaUsuario",{
           carnet_login_get:  this.state.carnet_login_get,
       }).then((response)=>{
           this.setState({data:response.data });     
       })
       .catch(error=>{
       })

       
       axios.post("http://localhost:3001/suma_cursosaprobados",{
           carnet_login_get:  this.state.carnet_login_get,
       }).then((response)=>{
     
     
        this.setState({creditos:JSON.stringify(response.data) });   
     console.log(this.state.creditos)
         //  this.setState({data:response.data });     
       })
       .catch(error=>{
       })
   
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
                        <TableCell>{data.carnet}</TableCell>
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
