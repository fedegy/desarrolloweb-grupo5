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
 /*NUEVA TABLA DE PUBLICACION*/
CREATE TABLE publicacion(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(510) NOT NULL,
    Registro INT NOT NULL,
    Sujeto VARCHAR(50) NOT NULL,
    Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
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
    profesor VARCHAR(100) NOT NULL,
    creditos INT NOT NULL,
    PRIMARY KEY (id_curso)
);

INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (283,'Analisis y Diseño de Sistemas 1','Mirna Ivonne Aldana Larrazabal',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (785,'Analisis y Diseño de Sistemas 2','Claudia Liceth Rojas Morales',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (778,'Arquitectura de Computadoras y Ensambladores 1','Otto Rene Escobar Leiva',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (779,'Arquitectura de Computadoras y Ensambladores 2','Alejandro Gabriel Díaz López',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (774,'Base de Datos 1','Luis Fernando Espino Barrios',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (775,'Base de Datos 2','Otto Amilcar Rodriguez Acosta',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (014,'Economía','Evelyn Carolina Morales Ruiz',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (772,'Estructura de Datos','Alvaro Obrayan Hernandez García',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (787,'Gerenciales 2','Mario Jose Bautista Fuentes',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (972,'Inteligencia Artificial 1','Luis Fernando Espino Barrios',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (770,'Introducción a la Programación y Computación 1','Neftali de Jesus Calderon Mendez',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (771,'Introducción a la Programación y Computación 2','Marlon Antonio Pérez Turk',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (796,'Lenguajes Formales y de Programación','Zulma Karina Aguirre Ordonez',3);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (795,'Logica de Sistemas','Flora Felipa Avila Pesquera',2);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (773,'Manejo e Implementación de Archivos','Alejandro Oscar Paz Campos',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (729,'Modelación y Simulación 1','Cesar Augusto Fernandez Caceres',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (720,'Modelación y Simulación 2','Miguel Angel Cancinos Rendon',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (964,'Organización Computacional','Otto Rene Escobar Leiva',3);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (781,'Organización de Lenguajes y Compiladores 2','Bayron Wosvely Lopez Lopez',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (777,'Organización Lenguajes y Compiladores 1','Kevin Adiel Lajpop Ajpacajá',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (2025,'Prácticas Iniciales','Hermán Igor Véliz Linares',0);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (2036,'Prácticas Intermedias','Floriza Felipa Avila Pesquera',0);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (970,'Redes de Computadoras 1','Allan Alberto Morataya',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (975,'Redes de Computadoras 2','Pablo Pedro Hernandez Ramirez',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (797,'Seminario de Sistemas 1','Fernando Manuel Lopez Fernandez',3);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (798,'Seminario de Sistemas 2','Luis Alberto Vettorazzi Espana',3);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (281,'Sistemas Operativos 1','Sergio Arnaldo Mendez Aguilar',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (285,'Sistemas Operativos 2','Neftali de Jesus Calderon Mendez',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (786,'Sistemas Organizacionales y Gerenciales 1','Edwin Estuardo Zapeta Gómez',4);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (722,'Teoria de Sistemas 1','Jorge Luis Alvarez Mejia',5);
INSERT INTO cursos (id_curso,nombre_curso,profesor,creditos) VALUES (724,'Teoria de Sistemas 2','Jorge Luis Alvarez Mejia',5);



SELECT*FROM cursos;


