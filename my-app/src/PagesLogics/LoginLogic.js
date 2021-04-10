import React from 'react'
import SignIn from '../pages/SignIn'
import axios from 'axios';



class LoginLogic extends React.Component{
    

    state = {
        carnet_login_get: '',
        constrasena_login_get: ''
    }

  
     login = (e) =>{
 
        e.preventDefault()
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state = {
            carnet_login_get:  global.email,
            constrasena_login_get: global.password
        }
       
        console.log('ejecutado', this.state.carnet_login_get,this.state.constrasena_login_get)
        axios.post("http://localhost:3001/login",{
            carnet_login_get:  this.state.carnet_login_get,
            constrasena_login_get:  this.state.constrasena_login_get,
        }).then((response)=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
         
                window.location.href="./Post";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }
    

    render(){ 
        return(
            <div >
           
            <SignIn 
            onClick= {this.login} />
            </div>
        )
    }
}

export default LoginLogic