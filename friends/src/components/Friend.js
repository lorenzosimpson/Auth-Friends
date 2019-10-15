import React from 'react'

const Friend = props => {
    return (
        <div className='friend'>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Friend;