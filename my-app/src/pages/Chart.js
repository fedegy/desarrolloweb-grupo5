import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Chart() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Nueva Publicación</Title>
      <container component="main" maxWidth="xs">
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            id="registroAcademico"
            label="Registro Académico"
            name="registroAcademico"
            autoComplete="registroAca"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="contraseña"
            label="Contraseña"
            type="password"
            id="contraseña"
            autoComplete="contraseña-actual"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="consulta"
            label="Consulta"
            type="consulta"
            id="consulta"
            autoComplete="consulta"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar
          </Button>
        </form>
      </container>
    </React.Fragment>
  );
}
