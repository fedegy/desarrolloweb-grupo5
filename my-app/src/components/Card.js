import React from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'
import {Link} from 'react-router-dom'

//const Card = ({ title, description, leftColor, rightColor }) => (
const Card = ({ title, description, Registro, Sujeto,Fecha }) => (
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
                <div className="col-6 Fitness-Card-Info">
                    <h1  className="Titulo">{title}</h1>
                    <h3 className="Registro">{Registro}</h3>
                    <h3 className="Sujeto">{Sujeto}</h3>
                    <h3>{description}</h3>
                    <p>{Fecha}</p>
                    <Link to="/exercise/new"></Link>
                    <button class="redondo"> ⬇⬇⬇ </button>

                </div>
            </div>
        </div>
    </div>
    <br/>
    </center>
    
)

export default Card