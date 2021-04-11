import React from 'react';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import Card from '../components/Card'
import axios from 'axios'
import Globales from '../components/globales'
import Cookies from 'universal-cookie'
import ComentariosNew from '../components/ComentarioNew'

global.Descripcion=''
class ExerciseList extends React.Component{
    state = {
        data:
        []
    }
    
    
         HandleChangeComentario= (e)=>{
            e.preventDefault();
            global.Descripcion = e.target.value
          //  console.log(global.Descripcion)
        }
  
        HandleClickEnviar = ()=>{
           
            console.log(global.Descripcion)

            const cookies = new Cookies();

    
            axios.post("http://localhost:3001/crear_comentario",{
                id_publicacion:  cookies.get('idCard'),
                Registro:cookies.get('idUsuario'),
                Descripcion:global.Descripcion,
            }).then((response)=>{
                this.setState({data:response.data })

                window.location.href = window.location.href;
                window.location.replace('');
    
            })




        }

        
        HandleClickRegresar = (e)=>{
            e.preventDefault();
            window.location.href="./Publicaciones";   
        }


    componentDidMount =() => {
        const cookies = new Cookies();
        console.log('http://localhost:3001/ver_comentarios_publicacion/',cookies.get('idCard'))

        axios.get("http://localhost:3001/ver_comentarios_publicacion/"+cookies.get('idCard'),{
          nombre_curso:  cookies.get('AgregarCurso'),
        }).then((response)=>{
            this.setState({data:response.data })


        })
    }
  
    render(){ 
     
console.log(Card.datos)

    
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

                 
                  
                        <ComentariosNew
                        
                        exercises={this.state.data}
                        
                        />
                  
                </Table>
            </TableContainer>

          
            <br/><br/>

            <label>Hacer comentario:__
              <input onChange={this.HandleChangeComentario} ></input> 


              </label> <button onClick={this.HandleClickEnviar}>Enviar</button>
                     
                    <br/><br/>

              <button onClick={this.HandleClickRegresar}>Regresar</button>
           

        </div>
    )
}}

export default ExerciseList
