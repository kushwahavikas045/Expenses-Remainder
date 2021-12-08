import React from 'react'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} className={`ui ${color} button`}>{text}</button>
    )
}

export default Button;
