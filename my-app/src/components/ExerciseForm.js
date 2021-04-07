import React from 'react'
import './styles/Form.css'

class ExercisesForm extends React.Component{
   
    state = {
        value:''
    };



 
   
    
    render(){
        const {value} = this.state
        var dat= new Date(); //Obtienes la fecha
        const{onChange,form,onSubmit}= this.props
        return (
            <center>
           <div className="container">
             <br/>
                <form 
                    onSubmit={onSubmit}
                >
                    <br/>

                    <div className="form-group">
                    <label>
                        Profesor
                    <input 
                      type="radio"
                      value="Profesor"
                      name="title"
                      checked={value === "Profesor"}
                      onChange={onChange}
                    />

                    </label> <br/>
                    <label>
                        Curso
                    <input 
                        type="radio"
                        name="title"
                        value="Curso"
                        checked={value === "Curso"}
                        onChange={onChange}
                    />

                    </label>
                      </div>

                       <br/>
                     <div className="form-group">
                        <input 
                        type="text"
                        className="data"
                        placeholder="Registro"
                        name="Registro"
                        onChange={onChange}
                        value={form.Registro}
                         />
                     </div><br/>
                     <div className="form-row">
                        <div className="col">
                            <input 
                            type="text"
                            className="data"
                            placeholder="Sujeto"
                            name="Sujeto"
                            onChange={onChange}
                            value={form.Sujeto}
                            />
                        </div><br/>

                        
                        <div className="col">
                        <label>
                            Fecha Actual
                        <input 
                        type="radio"
                        name="Fecha"
                        value={dat}
                        checked={value === "no"}
                        onChange={onChange}
                    />  </label>
                          
                        </div><br/>
                     </div>
                     <div className="form-group">
                        <input 
                        type="text"
                        className="dataG"
                        placeholder="description"
                        name="description"
                        onChange={onChange}
                        value={form.description}
                         />
                     </div><br/>

                     <button 
                     type="submit"
                     className="btn btn-primary"
                     >

                         Submit
                     </button>
                </form>   
           </div></center>
        )
    }
}

export default ExercisesForm