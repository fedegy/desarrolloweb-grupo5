import React from 'react'
import SignIn from '../pages/SignIn'


class LoginLogic extends React.Component{
    

    state = {
        carnet_login_get: '',
        constrasena_login_get: ''
    }
    
       hadleChange = async e => {
        e.preventDefault()
        console.log('se trato')

       try{
        this.state.carnet_login_get = global.email;
        this.state.constrasena_login_get = global.password;
        console.log(this.state)

        let result = await fetch('http://localhost:3001/login',{
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
            <SignIn 
            onClick= {this.hadleChange} />
            </div>
        )
    }
}

export default LoginLogic