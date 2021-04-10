import axios from 'axios';
import React, {Component} from 'react'

class DropCursos extends Component {
   state={
    nombre_curso:[]
   }
   
    componentDidMount(){
        axios
            .get("http://localhost:3001/lista_cursosdtt")
            .then((response)=>{
          
            this.setState({nombre_curso: response.data})
            })
            .catch((error) => {

                console.log(error);
            });
    }
    render() {
        return (
            <center>
            <div className="App">
               <div className="form-group">
                    <select name="ciudades" className="forme-control">
                        {this.state.nombre_curso.map(elemento=>(
                            <option key={elemento.id} value={elemento.id}>{elemento.nombre_curso}</option>
                        ))}
                    </select>   
                </div> 
            </div></center>
        );
    }
}

export default DropCursos;