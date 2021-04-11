import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { CursosAprobadosMain, PerfilTable } from "./Orders";
import DropPerfil from "../components/DropPerfil";
import CA from '../components/CAPerfil'
import PU from '../components/MIperfil'
import axios from 'axios'
import Cookies from 'universal-cookie'

global.Nombre=''
global.Apellido=''
global.Correo=''
global.Contrasena=''
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {

const HandleChangeNombre = (e)=>{
  e.preventDefault();
  global.Nombre=e.target.value
  console.log(global.Nombre)
}

const HandleChangeApellido = (e)=>{
  e.preventDefault();

  global.Apellido=e.target.value
  console.log(global.Apellido)
}


const HandleChangeCorreo= (e)=>{
  e.preventDefault();
  global.Correo= e.target.value
  console.log(global.Correo)
}


const HandleChangeContrasena = (e)=>{
  e.preventDefault();
  global.Contrasena= e.target.value
  console.log(global.Contrasena)
}


const HandleClick = (e)=>{
  const cookies = new Cookies();
  console.log( global.Nombre, ' ',global.Apellido, ' ', global.Correo, ' ',  global.Contrasena )

   
  axios.post("http://localhost:3001/ActialiarUsuario",{
    carnet:cookies.get('idUsuario'),
    nombres:  global.Nombre,
    apellidos: global.Apellido,
    contrasena:global.Contrasena ,
    correo:global.Correo
  }).then((response)=>{
  alert('¡Datos actualizados!')
    window.location.href = window.location.href;
    window.location.replace('');
  })


}


  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Mi Perfil
          </Typography>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>


            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
        
              <h1> Mi Perfil</h1>


              <PU/>

              </Paper>
            </Grid>


           
          <center>
              <Paper className={fixedHeightPaper}>
                
              <label>Nombre
              <input onChange={HandleChangeNombre} ></input>
              </label>

              <br/>

              <label>Apellido<t/>
              <input onChange={HandleChangeApellido}></input> 
              </label>

              <br/>

              <label>Correo
              <input onChange={HandleChangeCorreo}></input>
              </label>

              <br/>

              <label>Contraseña
              <input onChange={HandleChangeContrasena} ></input>
              </label>

             
              <br/>

              <button onClick={HandleClick}>Editar</button>

              </Paper>
           
              </center>


            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <DropPerfil />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
            
          
              <CA/>

              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
