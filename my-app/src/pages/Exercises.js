import React, { Fragment } from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'

class Exercises extends React.Component{
   
    state = {
        data:
        [{
            "id": 1,
            "title": "Technique Guides",
            "description": "Learn amazing street workout and calisthenics",
            "Registro": "202000119",
            "Sujeto": "IPC 1",
            "Fecha": "4/7/2021"
        },{
            "id": 2,
            "title": "Skills Training",
            "description": "Learn the secrets of bodyweight techniques",
            "Registro": "2222928283",
            "Sujeto": "Ing ALberto",
            "Fecha": "4/7/2021"
        },{
            "id": 3,
            "title": "Strength Training",
            "description": "Train anytime, everywere and become a superhero!",
            "Registro": "1111111",
            "Sujeto": "Ing ",
            "Fecha": "4/7/2021"
        }]
    }
    
    render(){
        return(

        <div> 
            <ExerciseList
            exercises={this.state.data}
            />

            <AddButton/>
        </div>
        )
    }
}

export default Exercises