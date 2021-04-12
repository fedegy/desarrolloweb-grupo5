import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (  
    <div>
        {exercises.map((exercese)=> (
                    <Card
                    key={exercese.id}
                    title={exercese.title}
                    description={exercese.description}
                    Registro={exercese.Registro}
                    Sujeto={exercese.Sujeto} 
                    Fecha={exercese.Fecha} 
                    id={exercese.id}
                    ></Card>
        ))}
    </div>
)

export default ExerciseList