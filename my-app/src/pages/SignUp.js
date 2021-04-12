import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

global.Newcarnet_get = "";
global.Newnombre_get = "";
global.Newapellidos_get = "";
global.Newconstrasena_get = "";
global.Newcorreo_get = "";

const NewValueCarnet = (event) => {
  event.preventDefault();
  global.Newcarnet_get = event.target.value;
};
const NewValueNombre = (event) => {
  event.preventDefault();
  global.Newnombre_get = event.target.value;
};
const NewValueApellidos = (event) => {
  event.preventDefault();
  global.Newapellidos_get = event.target.value;
};
const NewValuePassword = (event) => {
  event.preventDefault();
  global.Newconstrasena_get = event.target.value;
};
const NewValueEmail = (event) => {
  event.preventDefault();
  global.Newcorreo_get = event.target.value;
};

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarte
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="nombre"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                autoFocus
                onChange={NewValueNombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="apellido"
                onChange={NewValueApellidos}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="registroAcademico"
                label="Registro Académico"
                name="registroAcademico"
                autoComplete="registroAca"
                onChange={NewValueCarnet}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="correoElectronico"
                label="Correo Electrónico"
                name="correoElectronico"
                autoComplete="correoElectronico"
                type="email"
                onChange={NewValueEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="contraseña"
                autoComplete="contraseña-actual"
                onChange={NewValuePassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onClick}
          >
            Registrarte
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="./Registro" variant="body2">
                ¿Ya tienes una cuenta? Inicia Sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
