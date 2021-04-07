import React from 'react'
import Password from '../pages/Password'

global.email='';
global.password='';

class Login extends React.Component{
    

    state = {
        carnet_recuperarcontrasena_get: '',
        correo_recuperarcontrasena_get: ''
    }
    
       hadleChange = async e => {
        e.preventDefault()
        console.log('se trato')

       try{
        this.state.carnet_recuperarcontrasena_get = global.CarnetContrasena;
        this.state.correo_recuperarcontrasena_get = global.emailContrasena;
        console.log(this.state)

        let result = await fetch('http://localhost:3001/recuperar_password',{
        method: 'post',
        headers: {
            'Accept':'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(this.state)
        }); 

        console.log('que paso:',result)
       }catch (error){
        console.log('eerroor')
       }
    }

    render(){ 
      
        return(
            <div >
            <Password 
            onClick= {this.hadleChange} />
            </div>
        )
    }
}

export default Login