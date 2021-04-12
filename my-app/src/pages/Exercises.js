import React   from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Cookies from 'universal-cookie'

global.NProfesor='';
global.NCurso='';
global.ruta='';
global.filtro='';
class Exercises extends React.Component{


    state = {ruta:'',
        data:
        []
    }

    handleClick (){
        const cookies = new Cookies();



   //Radios Buttons
        if(global.NProfesor=="" && global.filtro=="Profesor"){
            alert(global.filtro)
            cookies.set('rutaPublicaciones','http://localhost:3001/ver_publicacionProfesores',{path: '/'})
        }

        if(global.NCurso=="" && global.filtro=="Curso"){
            cookies.set('rutaPublicaciones','http://localhost:3001/ver_publicacionCrusos',{path: '/'})
            alert(global.filtro)
        }
      
        if( global.filtro=="Todos"){
            cookies.set('rutaPublicaciones','http://localhost:3001/ver_publicacion',{path: '/'})
             alert(global.filtro)
        }
       
   //INdividuales Buttons
        if(global.NProfesor!="" && global.filtro=="Profesor"){
          alert(global.NProfesor)
          cookies.set('rutaPublicaciones','http://localhost:3001/verpublicacion_profesor/'+global.NProfesor,{path: '/'})
        }

        if(global.NCurso!="" && global.filtro=="Curso"){
           cookies.set('rutaPublicaciones','http://localhost:3001/verpublicacion_Curso/'+global.NCurso,{path: '/'})
            alert(global.NCurso)
        }

   //--------------
        
        window.location.href = window.location.href;
        window.location.replace('');
    }

    onValueChange(event) {
        global.filtro= event.target.value   
      }



    handleChangeRadios=(e)=> {
        this.setState({
          selectedOption: e.target.value
        });
        global.filtro=this.selectedOption
        alert(this.selectedOption)
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
       // alert(cookies.get('rutaPublicaciones'))

    try{
    
        this.state.ruta = cookies.get('rutaPublicaciones')
        let res = await fetch(this.state.ruta)
        let data = await res.json()
        console.log(data)
       this.setState({data})
       
    }catch(error){}
      //  console.log(data)
    }
    
  
    
    render(){
       
        const cookies = new Cookies();


        return(
        <div> 
               <div className="form-group">
               <pre><label>
                  
                    <input type="radio" value="Profesor" 
                    checked={this.state.selectedOption === "Profesor"}
                    onChange={this.onValueChange} />
                  
                     Profesores
                    </label> 
                  
                    <input 
                        type="text"
                        className="data"
                      
                        name="Profesor"
                        onChange={this.handleonChnageProfesor}
                         />  </pre>
                 

                    <pre><label>
                    <input type="radio" value="Curso" 
                      checked={this.state.selectedOption === "Curso"}
                      onChange={this.onValueChange}/>
                      Curso
                    </label> 
                    <input 
                        type="text"
                        className="data"
                        name="Curso"
                       onChange={this.handleonChnageCurso}
                         />
                    <br/></pre>

                    <pre><label>
                  
                  <input type="radio" value="Todos" 
                  checked={this.state.selectedOption === "Todos"}
                  onChange={this.onValueChange} />
                
                   Todos
                  </label> 
                
                </pre>

                    <button onClick={this.handleClick}>Filtrar</button>
                 
                 
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