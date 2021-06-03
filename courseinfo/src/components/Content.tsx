import React from 'react'
import { CourseParts } from '../types'
import Part from './Part'


const Content: React.FC<CourseParts> = ( {courseParts} ) => {

    console.log(courseParts)

    return (
        <div>
        {courseParts.map(c => <Part key = {c.name} coursePart = {c}/>)}
        </div>
    )
}

export default Content