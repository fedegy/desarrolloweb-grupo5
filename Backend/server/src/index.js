//Se utilizan los siguientes modulos para su posterior uso
/*Uso de express como framework y mysql para las funciones necesarias
de la base de datos 
Se utiliza body parser para tener acceso a body y para hacer uso de post
*/
const bodyP = require('body-parser');
const exp=require('express')
const mysql=require('mysql')
const app=exp()

//Se creo conexion de base de datos
const db=mysql.createPool({
    host:"localhost",               //Host de alojamiento de base de datos
    user:"root",                    //Usuario de host
    password:"",                    //Contraseña
    database:"portal_estudiantil"   //Nombre de la base de datos
});

//Ruta por defecto de servidor
app.get('/',(req,res)=>{
    console.log("Servidor Node JS")
    res.send("Servidor Node JS")
});

//Haciendo uso de body-parser
app.use(bodyP.urlencoded({
    extended:true
}));


//Puerto en donde sera ejecutado
app.listen(3001,()=>{
    console.log('Servidor corriendo')
});

