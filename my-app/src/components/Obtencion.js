
import React, { Fragment } from 'react'


class Exercises extends React.Component{
  
    state = {
        data:
        []
    }

    async componentDidMount(){
        await this.fetchObtencion()
    }

    fetchObtencion = async () => {
        let res = await fetch('http://localhost:3001/mostrar_estudiantes')
        let data = await res.json()
        this.setState({data})
        console.log(data)
    }
    
    render(){
        return(

        <div>  
        </div>
        )
    }
}

export default Exercises