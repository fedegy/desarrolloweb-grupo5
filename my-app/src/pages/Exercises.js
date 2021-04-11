import React   from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Cookies from 'universal-cookie'

global.NProfesor='';
global.NCurso='';
global.ruta='';
class Exercises extends React.Component{


    state = {ruta:'',
        data:
        []
    }

    handleClick (){


      
       
       // global.ruta='http://localhost:3001/ver_publicacion';
        
        //window.location.href = window.location.href;
        //window.location.replace('');
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
  


    async componentDidMount(){
        await this.fetchObtencion()
    }

    fetchObtencion = async (e) => {
        const cookies = new Cookies();
        alert(cookies.get('rutaPublicaciones'))

    try{
        console.log('rutas:')
        this.state.ruta = cookies.get('rutaPublicaciones')
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
                    <button onClick={this.getData}>Todo</button>
                    <button onClick={this.handleClick}>Filtrar</button>
                    <button onClick={this.handleClick}>add</button>
                 
                 
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