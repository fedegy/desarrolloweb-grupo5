CREATE DATABASE PORTAL_ESTUDIANTIL;		/*Creacion de Base de Datos*/
USE PORTAL_ESTUDIANTIL;					/*Usar Base de Datos*/	

/*Creación de tabla*/
CREATE TABLE registro(
	carnet INT NOT NULL,
	nombres VARCHAR(50) NOT NULL,
	apellidos VARCHAR(50) NOT NULL,
	contrasena VARCHAR(50) NOT NULL,
	correo VARCHAR(50) NOT NULL,
	PRIMARY KEY (carnet)
);

/*Seleccionar valores de tabla registro*/
SELECT*FROM registro;

CREATE TABLE publicacion(
	id INT NOT NULL AUTO_INCREMENT,
    carnet INT NOT NULL,
    sujeto VARCHAR(50) NOT NULL,
    mensaje VARCHAR(510) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo INT NOT NULL,
    PRIMARY KEY(id)
    
);

SELECT*FROM publicacion;


CREATE TABLE cursos_aprobados_dtt(
	id_curso INT NOT NULL,
    carnet INT NOT NULL,
    PRIMARY KEY(id_curso)
);

SELECT*FROM cursos_aprobados_dtt;


CREATE TABLE cursos(
	id_curso INT NOT NULL,
    nombre_curso VARCHAR(100) NOT NULL,
    creditos INT NOT NULL,
    PRIMARY KEY (id_curso)
);
