import React from 'react'
import SignUp from '../pages/SignUp'



class NewUserLogin extends React.Component{
    

    state = {
        carnet_get: '',
        nombre_get: '',
        apellidos_get: '',
        constrasena_get: '',
        correo_get: '',
    }
    
       hadleChange = async e => {
        e.preventDefault()
        console.log('se trato')
        
       try{
        this.state.carnet_get = global.Newcarnet_get;
        this.state.nombre_get = global.Newnombre_get;
        this.state.apellidos_get = global.Newapellidos_get;
        this.state.constrasena_get = global.Newconstrasena_get;
        this.state.correo_get = global.Newcorreo_get;

        console.log(this.state)

        let result = await fetch('http://localhost:3001/registrar_alumno',{
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
            <SignUp 
            onClick= {this.hadleChange} />
            </div>
        )
    }
}

export default NewUserLogin