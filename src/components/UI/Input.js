import React from 'react'
import './Input.sass'

function isInvalid(valid, touched, shouldValidate) {
    return !valid && shouldValidate && touched
}

const Input = ({ placeholder, onChange, type, value, valid, touched, shouldValidate, errorMessage }) => {

    return (
        <>

        <input
            type={type || "text"}
            className="inputs"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {
            isInvalid(valid, touched, shouldValidate) ? 
            <div className="errorIcon">
                <div className="cross"></div>
            </div> : 
            null
        }

        </>
    )
}

export default Input