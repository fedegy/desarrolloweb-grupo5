import React from 'react'
import Password from '../pages/Password'
import axios from 'axios';

class PasswordLogic extends React.Component{
    

    state = {
        carnet_recuperarcontrasena_get: '',
        correo_recuperarcontrasena_get: ''
    }

     handleClick = (e) =>{
        e.preventDefault()

            axios.post("http://localhost:3001/recuperar_password",{
                carnet_recuperarcontrasena_get : global.CarnetContrasena,
                correo_recuperarcontrasena_get : global.emailContrasena,
               
            }).then((response)=>{
               
                const datos= JSON.stringify(response.data)
                console.log(datos)
                alert(datos)
            })   
        }
    
      

    render(){ 
      
        return(
            <div >
            <Password 
            onClick= {this.handleClick} />
            </div>
        )
    }
}

export default PasswordLogic