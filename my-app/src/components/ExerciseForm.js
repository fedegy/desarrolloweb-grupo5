import React from 'react'
import './styles/Form.css'

class ExercisesForm extends React.Component{
   


    hadleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
   
   

    render(){
        var dat= new Date(); //Obtienes la fecha
        const{onChange,form}= this.props
        return (
            <center>
           <div className="container">
             <br/>
                <form 
                    onSubmit={this.hadleSubmit}
                >
                       <div className="form-group">
                        <input 
                        type="email"
                        className="data"
                        placeholder="Tipo"
                        name="title"
                        onChange={onChange}
                        value={form.title}
                    />
 
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
                            <input 
                            type="text"
                            className="data"
                            placeholder={dat}
                            name="Fecha"
                            onChange={onChange}
                            value={form.Fecha}
                            />
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