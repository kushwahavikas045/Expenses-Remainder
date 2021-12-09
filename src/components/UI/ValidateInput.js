import React from 'react';
import '../Styles/Error.css';
import { ErrorMessage, useField } from 'formik';
const ValidateInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className={`field  ${meta.touched && meta.error && 'error'}`}>
            <label>{label}</label>
            <input {...field} {...props} />
            <ErrorMessage component="div" name = {field.name} className="error"/>
        </div>
    )
}

export default ValidateInput;
