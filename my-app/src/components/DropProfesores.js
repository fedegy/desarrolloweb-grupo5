// import axios from 'axios';
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class DropProfesores extends Component {
   state={
       cate:'Mario',
    profesor:[]

   }

   
   if ( ) {

    }

    componentDidMount(){
        axios
            .get("http://localhost:3001/select_profesor")
            .then((response)=>{
                console.log(response, 'siee')
            this.setState({profesor: response.data})
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
                        {this.state.profesor.map(elemento=>(
                            <option key={elemento.id} value={elemento.id}>{elemento.profesor}</option>
                        ))}
                    </select>   
                </div> 

            </div></center>
        );
    }
}

export default DropProfesores;
