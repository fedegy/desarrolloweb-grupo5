import React from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Globales from './globales'



 function Card({ title, description, Registro, Sujeto,Fecha,id })  {
   const state={
    publicacionid_comentarios_get: id,
    showMe:true
    }
   


    
   const handleClick = () =>{
    console.log(state.publicacionid_comentarios_get)   
        axios.post("http://localhost:3001/Comentarios",{
            publicacionid_comentarios_get: state.publicacionid_comentarios_get,
           
        }).then((response)=>{
            global.id=state.publicacionid_comentarios_get
            const datos= response.data
          
            console.log(datos)
        })   
    }
    
return(
    <center>
    <div className="card mx-auto Fitness-Card"
    style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${'#56CCF2'}  , ${ '#2F80ED'}) `
    }}
    >   
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                   
                </div> 
           
                <div className="col-6 Fitness-Card-Info" >
                    <h1 className="Titulo">{title}</h1>
                    <h3 className="Registro">{Registro}</h3>
                    <h3 className="Sujeto">{Sujeto}</h3>
                    <h3>{description}</h3>
                    <p>{Fecha}</p>
                
        
                    <button class="redondo" /*onClick={handleClick}*/ onClick={handleClick}>⬇⬇⬇  </button>
                </div>
            </div>
        </div>
    </div>
    <br/>
    </center>
    
)}

export default Card