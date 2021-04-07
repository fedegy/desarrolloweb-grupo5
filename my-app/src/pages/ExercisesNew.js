import React from 'react'
import ExercisesForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExercisesNew extends React.Component{

  
    state = {
        form:{
            title: '',
            description: '',
            Registro: '', 
            Sujeto: '',
            Fecha: '' 
        }
    }

    hadleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
           
        })
    }

    render(){
        return (
            <div className="row">
                <Card {...this.state.form}/>
                <div className="col-sm">
                    <ExercisesForm
                    onChange={this.hadleChange}
                    form={this.state.form}
                    />

                </div>
                
            </div>

            
          
        )
    }
}

export default ExercisesNew