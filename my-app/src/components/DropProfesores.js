// import axios from 'axios';
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class DropProfesores extends Component {
  state = {
    profesor: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/select_profesor")
      .then((response) => {
        console.log(response);
        this.setState({ profesor: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <center>
        <div className="App">
          <form className="form-group">
            <select name="ciudades" className="forme-control">
              {this.state.profesor.map((elemento) => (
                <option key={elemento.id} value={elemento.id}>
                  {elemento.profesor}
                </option>
              ))}
            </select>
            <br></br>
            <textarea name="comment" form="usrform">
              Ingresa tu Consulta
            </textarea>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </div>
      </center>
    );
  }
}

export default DropProfesores;
