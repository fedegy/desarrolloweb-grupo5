import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Datos para las publicaciones
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
