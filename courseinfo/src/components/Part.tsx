import React from 'react'
import { SinglePart } from '../types'

const Part: React.FC<SinglePart> = ( {coursePart} ) => {

    const assertNever = (value: never): never => {
        throw new Error(
             `Unhandled discriminated union member: ${JSON.stringify(value)}`
        )
    }

    switch(coursePart.name) {
        case 'Fundamentals': {
            return (
                <div>
                    <h1>{coursePart.name}</h1>
                    <p>{coursePart.description}</p>
                    <p>Exercises: {coursePart.exerciseCount}</p>
                </div>
            )
        }
        case 'Using props to pass data': {
            return (
                <div>
                    <h1>{coursePart.name}</h1>
                    <p>Group Project exercises: {coursePart.groupProjectCount}</p>
                    <p>Exercises: {coursePart.exerciseCount}</p>
                </div>)  
        }

        case 'Deeper type usage': {
            return (
                <div>
                    <h1>{coursePart.name}</h1>
                    <p>{coursePart.description}</p>
                    <p>Exercise submission link: {coursePart.exerciseSubmissionLink}</p>
                    <p>Exercises: {coursePart.exerciseCount}</p>
                </div>)
        }
        case 'Becoming a god': {
            return(
                <div>
                    <h1>{coursePart.name}</h1>
                     <p>{coursePart.description}</p>
                     <p>Exercises: {coursePart.exerciseCount}</p>
                </div>
            )
        }
        default: 
          return assertNever(coursePart);
    }

    

}

export default Part