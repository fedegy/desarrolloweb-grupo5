/* eslint-disable no-undef */
// import axios from 'axios';
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import Cookies from 'universal-cookie'

global.nombre_curso=''

class DropPerfil extends Component {


  state = {datacursos:[],
    nombre_curso: [],
  };


 



  handloClick=(e)=>{
  const cookies = new Cookies();

  axios.get("http://localhost:3001/BuscarAsignarCursos/"+cookies.get('AgregarCurso'),{
    nombre_curso:  cookies.get('AgregarCurso'),
  }).then((response)=>{

    
    global.datacursos = response.data
    console.log(global.datacursos[0].id_curso)
    console.log(global.datacursos[0].creditos)
    cookies.set('id_curso',global.datacursos[0].id_curso,{path: '/'});
    cookies.set('creditos',global.datacursos[0].creditos,{path: '/'});



    axios.post("http://localhost:3001/Asignar_cursos",{
      id_curso:  cookies.get('id_curso'),
      carnet:  cookies.get('idUsuario'),
      nombre_curso: cookies.get('AgregarCurso'),
      creditos: cookies.get('creditos')
    }).then((response)=>{
    alert(cookies.get('AgregarCurso'))
      window.location.href = window.location.href;
      window.location.replace('');
  
  
    })
  })

 


  }

  handleChange(e){
    const cookies = new Cookies()
    e.preventDefault();
    global.curso = e.target.value
    cookies.set('AgregarCurso', global.curso,{path: '/'})
    console.log(cookies.get('AgregarCurso'))
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/lista_cursosdtt")
      .then((response) => {
        this.setState({ nombre_curso: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <center>
        <div className="App">
          <Grid container spacing={1}>
            <Grid item xs={12}>
            <select name="ciudades" className="forme-control" id="lista" onChange={this.handleChange}>
              {this.state.nombre_curso.map((elemento) => (
                <option key={elemento.id} value={elemento.id} >
                  {elemento.nombre_curso}
                </option>
              ))}
            </select>
            </Grid>
            <br></br>
            <Grid item xs={8}>
          
              <Button type="submit" variant="contained" color="primary"
              onClick={this.handloClick}>
                Agregar Curso
              </Button>
            </Grid>
           
          </Grid>
        </div>
      </center>
    );
  }
}

export default DropPerfil;
