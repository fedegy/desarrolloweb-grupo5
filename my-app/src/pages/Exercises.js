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
                        Profesor
                    <input 
                      type="radio"
                      value="Filtrar por Curso"
                      name="title"
                  
                     // onChange={onChange}
                    />
                    </label> 
                    
                    <input 
                        type="text"
                        className="data"
                        placeholder="Profesor"
                        name="Profesor"
                      //  onChange={onChange}
                        value=""
                         />
          
                    <br/>

                    <label>
                        Curso
                    <input 
                        type="radio"
                        name="title"
                        value="Filtrar por Catedrático."
                    
                      //  onChange={onChange}
                    />
                    </label>
                    <input 
                        type="text"
                        className="data"
                        placeholder="Curso"
                        name="Curso"
                      //  onChange={onChange}
                        value=""
                         />



                    <br/>
                    <button>Filtrar</button>
                      </div>


            <ExerciseList 
            exercises={this.state.data}
            />

            <AddButton/>
        </div>
        )
    }
}

export default Exercises