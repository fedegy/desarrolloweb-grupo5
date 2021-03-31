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
const base_datos=mysql.createPool({
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

/*Se añade funcion post que obtendra parametros de componentes del lado del cliente
(React JS)
*/
app.post('/registrar_alumno',(req,res)=>{
    const txt_carnet=req.body.carnet_get;   //Se obtiene los valores de componentes de React
    const txt_nombre=req.body.nombre_get;
    const txt_apellidos=req.body.apellidos_get;
    const txt_contrasena=req.body.constrasena_get;
    const txt_correo=req.body.correo_get;

    //Se insertan los datos en base de datos 
    //Usando misma estructura que el formato sql
    const insertrar_registro="INSERT INTO registro (carnet,nombres,apellidos,contrasena,correo) VALUES (?,?,?,?,?);"
    //Se obtienene los valores de las constantes declaradas al inicio de la función post
    base_datos.query(insertrar_registro,[txt_carnet,txt_nombre,txt_apellidos,txt_contrasena,txt_correo],(err,result)=>{
        //Se envia mensaje de registro exitoso
        res.send("Se registro con éxito el alumno.");
    })
}); 

//Realizar el login del usuario registrado
app.post('login',(req,res)=>{
    const txt_login_carnet=req.body.carnet_login_get;
    const txt_login_contrasena=req.body.constrasena_login_get;
})


//Puerto en donde sera ejecutado
app.listen(3001,()=>{
    console.log('Servidor corriendo')
});

