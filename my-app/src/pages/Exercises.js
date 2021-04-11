import React   from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'


global.NProfesor='';
global.NCurso='';

class Exercises extends React.Component{
 
    state = {ruta:'',
        data:
        []
    }


    handleonChnageCurso=(e)=>{
        e.preventDefault();
        global.NCurso= e.target.value
        console.log(global.NCurso)
    }

    handleonChnageProfesor=(e)=>{
        e.preventDefault();
        global.NProfesor= e.target.value
        console.log(global.NProfesor)
    }
    pop=(e)=>{
     
        this.state.ruta = 'http://localhost:3001/ver_publicacion'
        console.log( this.state.ruta)
    }


    async componentDidMount(){
        await this.fetchObtencion()
    }

    fetchObtencion = async (e) => {

    try{
        console.log('activacopnes')
      
        let res = await fetch(this.state.ruta)
        let data = await res.json()
       this.setState({data})
    }catch(error){}
      //  console.log(data)
    }
    

    
    render(){
        return(

        <div> 
               <div className="form-group">
                    <label>
                    Profesores
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
                   
                        onChange={this.handleonChnageProfesor}
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
                     
                        onChange={this.handleonChnageCurso}
                         />
                    <br/>
                    <button>Todo</button>
                    <button onClick={this.pop}>Filtrar</button>
                 
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