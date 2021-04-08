import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// Pagina de publicaciones
function createData(id, fecha, curso, catedratico, usuario, consulta) {
  return { id, fecha, curso, catedratico, usuario, consulta };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Analisis y Diseño de Sistemas 1(Seccion A-)",
    "ALDANA LARRAZABAL, MIRNA IVONNE",
    "Sergie Arienzandieta",
    "F"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Análisis y Diseño de Sistemas 2 (Sección A)",
    "ROJAS MORALES, CLAUDIA LICETH",
    "Federico",
    "Sale en vacas"
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Análisis y Diseño de Sistemas 2 (Sección A)",
    "ROJAS MORALES, CLAUDIA LICETH",
    "Rafael Meza",
    "Sale sin estudiar"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Analisis y Diseño de Sistems 1(Seccion A+)",
    "GUEVARA ORELLANA, WILLIAM SAMUEL",
    "Erick Noriega",
    "Sale sola"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Arquitectura de Computadoras y Ensambladores 1 (Sección A)",
    "ESCOBAR LEIVA, OTTO RENE",
    "John Pipol",
    "No lo haga compa"
  ),
];

//Pagina de Usuarios
function createDataCursos(id, fecha, usuario, creditos) {
  return { id, fecha, usuario, creditos };
}

const rowsCursos = [
  createDataCursos(0, "16 Mar, 2019", "Jorge Lopez", 28),
  createDataCursos(1, "16 Mar, 2019", "Natasha Romanoff", 78),
];

//Pagina de Perfil
function CursosMain(id, fecha, curso, creditos) {
  return { id, fecha, curso, creditos };
}

const rowsCursosMain = [
  CursosMain(0, "16 Mar, 2019", "Analisis y Diseño de Sistemas 1", 28),
  CursosMain(1, "16 Mar, 2019", "Analisis y Diseño de Sistemas 2", 13),
];

function Perfil(id, registro, nombre, apellido, correo, contrasena) {
  return { id, registro, nombre, apellido, correo, contrasena };
}

const datosPerfil = [
  Perfil(
    0,
    "20202121",
    "Kylian",
    "Goretzka",
    "registro@hotmail.com",
    "miPat1t0F30"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Publicaciones Recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Curso</TableCell>
            <TableCell>Catedrático</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Consulta</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.curso}</TableCell>
              <TableCell>{row.catedratico}</TableCell>
              <TableCell>{row.usuario}</TableCell>
              <TableCell>{row.consulta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export function Cursos() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Cursos Aprobados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell>Créditos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsCursos.map((rowsCursos) => (
            <TableRow key={rowsCursos.id}>
              <TableCell>{rowsCursos.fecha}</TableCell>
              <TableCell>{rowsCursos.usuario}</TableCell>
              <TableCell>{rowsCursos.creditos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export function CursosAprobadosMain() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Cursos Aprobados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Curso</TableCell>
            <TableCell>Créditos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsCursosMain.map((rowsCursosMain) => (
            <TableRow key={rowsCursosMain.id}>
              <TableCell>{rowsCursosMain.fecha}</TableCell>
              <TableCell>{rowsCursosMain.curso}</TableCell>
              <TableCell>{rowsCursosMain.creditos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export function PerfilTable() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Mi Perfil</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Registro Académico</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Correo Electrónico</TableCell>
            <TableCell>Contraseña</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datosPerfil.map((datosPerfil) => (
            <TableRow key={datosPerfil.id}>
              <TableCell>{datosPerfil.registro}</TableCell>
              <TableCell>{datosPerfil.nombre}</TableCell>
              <TableCell>{datosPerfil.apellido}</TableCell>
              <TableCell>{datosPerfil.correo}</TableCell>
              <TableCell>{datosPerfil.contrasena}</TableCell>
              <Button type="submit">Editar</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        type="submit"
        style={{
          height: "30px",
          width: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="contained"
        color="primary"
      >
        Guardar
      </Button>
    </React.Fragment>
  );
}
