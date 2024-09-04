import React from 'react'
import "./Title.css"

const Title = ({ title, sub_title }) => {
    return (
        <div className='title'>
            <p>{title}</p>
            <h2>{sub_title}</h2>
        </div>
    )
}

export default Title