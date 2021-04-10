// import axios from 'axios';
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from 'axios'

class DropPerfil extends Component {
  state = {
    curso: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/select_profesor")
      .then((response) => {
        console.log(response);
        this.setState({ curso: response.data });
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
              <select name="ciudades" className="forme-control">
                {this.state.curso.map((elemento) => (
                  <option key={elemento.id} value={elemento.id}>
                    {elemento.curso}
                  </option>
                ))}
              </select>
            </Grid>
            <br></br>
            <Grid item xs={8}>
              <Button type="submit" variant="contained" color="primary">
                Agregar Curso
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button type="submit" variant="contained" color="primary">
                Eliminar Curso
              </Button>
            </Grid>
          </Grid>
        </div>
      </center>
    );
  }
}

export default DropPerfil;
