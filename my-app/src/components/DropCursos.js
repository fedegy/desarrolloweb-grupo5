import axios from 'axios';
import React, {Component} from 'react'





class DropCursos extends Component {
   state={
    ciudades:[]
   }
   
    componentDidMount(){

        axios
            .get("")
            .then((response)=>{
            console.log(response)
            this.setState({ciudades: response})
            })
       
        

    }
    render() {
        return (
            <div>
               <div>
                    <select name="ciudades" className="forme-control">
                        {this.state.ciudades.map(elemento=>{

                            <option key={elemento.id} value={elemento.id}>{elemento.ciudades}</option>

                        })}
                    </select>   
                </div> 
            </div>
        );
    }
}

export default DropCursos;