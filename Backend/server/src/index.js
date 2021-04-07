//Se utilizan los siguientes modulos para su posterior uso
/*Uso de express como framework y mysql para las funciones necesarias
de la base de datos 
Se utiliza body parser para tener acceso a body y para hacer uso de post
*/
const bodyP = require('body-parser');
const exp=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=exp()
app.use(cors());
app.use(exp.json());


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
    const insertrar_registro_sql="INSERT INTO registro (carnet,nombres,apellidos,contrasena,correo) VALUES (?,?,?,?,?);"
    //Se obtienene los valores de las constantes declaradas al inicio de la función post
    base_datos.query(insertrar_registro_sql,[txt_carnet,txt_nombre,txt_apellidos,txt_contrasena,txt_correo],(err,result)=>{
    //Se envia mensaje de registro exitoso
    res.send("Se registro con éxito el alumno.");
    console.log("Se registro con éxito el alumno.");
    console.log(res)
    })
}); 

//Realizar el login del usuario registrado
app.post('/login',(req,res)=>{
    const txt_login_usuario=req.body.carnet_login_get;
    const txt_login_contrasena=req.body.constrasena_login_get;
    //Se verifican que valores de los componentes deben coincidir
    if(txt_login_usuario&&txt_login_contrasena){
        /*Se seleccionan los datos que se validaran de la base de datos, en este caso es
        carnet y contraseña*/
        const validar_autenticacion_sql="SELECT*FROM registro WHERE carnet=? AND contrasena=?";
        //Se verifican los valores existentes y si coinciden
        base_datos.query(validar_autenticacion_sql,[txt_login_usuario,txt_login_contrasena],(err,result)=>{
        //Se verifica la longitud de la respuesta si es mayor y si es correcta
        if(result.length>0){
            //Se manda mensaje en consola
            res.send("Se autentico con exito");
            console.log(result);
            console.log("Se autentico con exito");
        }else{
            res.send("Error, usuario o contraseña incorrecto");
            console.log("Error, usuario o contraseña incorrecto");
        }
        //Finaliza respuesta
        res.end();
        })
    }
});

//Recuperación de contraseña olvidada
app.post('/recuperar_password',(req,res)=>{
    //Valores de componentes de React sobre contraseña olvidada
    const txt_carnet_recuperarcontrasena=req.body.carnet_recuperarcontrasena_get;
    const txt_correo_recuperarcontrasena=req.body.correo_recuperarcontrasena_get;
    //Verificar datos que deben coincidir
    if(txt_carnet_recuperarcontrasena&&txt_correo_recuperarcontrasena){
        //Se selecciona contraseña verificando si el usuario y contraseña coincide
        const recuperarcontra_sql="SELECT contrasena FROM registro WHERE carnet=? AND correo=?";   
        //Se realiza la consulta
        base_datos.query(recuperarcontra_sql,[txt_carnet_recuperarcontrasena,txt_correo_recuperarcontrasena],(err,result)=>{
        //Se verifica si es mayor y si es correcto
        if(result.length>0){
            //Se muestra la contraseña
            res.send(result);
            console.log(result);
            console.log('Recuperar contrasena exitoso')
        }else{
            res.send("Error, no coinciden los datos ingresados");
            console.log("Error, no coinciden los datos ingresados")
        }
        //Se finaliza la respuesta
        res.end();
        })
    }
});

app.get('/mostrar_estudiantes',(req,res)=>{
    const mEstudiantes="SELECT*FROM registro;"
    base_datos.query(mEstudiantes,(err,result)=>{
        console.log(result);
        res.send(result)
    })
});

//Creacion de publicacion 
app.post('/crear_publicacion',(req,res)=>{
    const carnet_publicacion=req.body.carnet_publicacion_get;
    const sujeto_publicacion=req.body.sujeto_publicacion_get;
    const mensaje_publicacion=req.body.mensaje_publicacion_get;
    const tipo_publicacion=req.body.tipo_publicacion_get;
    //Se descarta ID y fecha porque se ingresan automaticamente
    const crear_publicacionSQL='INSERT INTO publicacion (carnet,sujeto,mensaje,tipo) VALUES (?,?,?,?);'
    base_datos.query(crear_publicacionSQL,[carnet_publicacion,sujeto_publicacion,mensaje_publicacion,tipo_publicacion],(err,result)=>{
        console.log(result)
        res.send(result)
    })
});


//Ver publicacion
app.get('/ver_publicacion',(req,res)=>{
    //Se descarta ID y fecha porque se ingresan automaticamente
    const ver_publicacionSQL='SELECT*FROM publicacion'
    base_datos.query(ver_publicacionSQL,(err,result)=>{
        console.log(result)
        res.send(result)
    })
});



//Puerto en donde sera ejecutado
app.listen(3001,()=>{
    console.log('Servidor corriendo')
});

