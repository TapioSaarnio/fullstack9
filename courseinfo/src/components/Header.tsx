import React from 'react'

const Header: React.FC<{ courseName: string }> = ({ courseName }) => {

    console.log('coursename')
    console.log(courseName)
    return (

        <div>
        <h1>{courseName}</h1>
        </div>
    )
}

export default Header