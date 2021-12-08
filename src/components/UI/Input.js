import React from 'react'

const Input = ({label, type, placeholder,...props}) => {
    return (
        <div className="field">
    <label>{label}</label>
    <input
    type={type}
    placeholder={placeholder}
    {...props}
    />
  </div>
    )
}

export default Input
