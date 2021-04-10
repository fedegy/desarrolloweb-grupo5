import React   from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'

class Exercises extends React.Component{
   
    state = {
        data:
        []
    }

    async componentDidMount(){
        await this.fetchObtencion()
    }

    fetchObtencion = async () => {
        let res = await fetch('http://localhost:3001/ver_publicacion')
        let data = await res.json()
       this.setState({data})
        console.log(data)
    }
    

    
    render(){
        return(

        <div> 
               <div className="form-group">
                    <label>
                    <input 
                      type="radio"
                      value="Filtrar por Curso"
                      name="title"
                    />
                    </label> 
                    
                    <input 
                        type="text"
                        className="data"
                        placeholder="Profesor"
                        name="Profesor"
                        value=""
                         />
                    <br/>

                    <label>
                        Curso
                    <input 
                        type="radio"
                        name="title"
                        value="Filtrar por Catedrático."
                    />
                    </label>
                    <input 
                        type="text"
                        className="data"
                        placeholder="Curso"
                        name="Curso"
                        value=""
                         />
                    <br/>
                    <button>Filtrar</button>
                      </div>

                      <AddButton/>
            <ExerciseList 
            exercises={this.state.data}
            />

          
        </div>
        )
    }
}

export default Exercises