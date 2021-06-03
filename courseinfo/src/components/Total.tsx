import React from 'react'
import { CourseParts } from '../types'

const Total: React.FC<CourseParts> = ( {courseParts} ) => {

    const totalCount = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)



    return (
        <div>
           <p>Number of exercises: {totalCount}</p>
        </div>
    )
}

export default Total