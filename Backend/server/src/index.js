const exp=require('express')
const mysql=require('mysql')
const app=exp()

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"portal_estudiantil"
});

app.get('/',(req,res)=>{
    const insertar_tabla="INSERT INTO registro (carnet,nombres,apellidos,contrasena,correo) VALUES (202000000,'Usuario 1','User','12345','correo@example.com');"
    db.query(insertar_tabla,(err,result)=>{
        res.send('Servidor Node Js')
    })
    
});

app.listen(3001,()=>{
    console.log('Servidor en puerto 3001')
});

