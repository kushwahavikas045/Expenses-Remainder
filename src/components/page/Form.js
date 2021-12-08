import React from 'react'
import {Formik, Form} from 'formik';
import Grid from '../UI/Grid';
import Input from '../UI/Input';
import Button from '../UI/Button';
import * as Yup from 'yup';
const FormData = () => {

    const validate = Yup.object({
        name: Yup.string().max(15, 'Must be 15 character or less')
        .required('Required'),
        email: Yup.string().email('Email is Invalid').required('Required'),
        password: Yup.string()
        .min(6,'Password must be atleast 6 character').required('password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password is not match')
        .required('confirm password is required')
    })

    return (
        <Formik
        initialValues = {{
            name : '',
            email : '',
            password: '',
            confirmPassword : '',
         }}
         validationSchema={validate}
         onSubmit={values => {
            console.log(values)
          }}
        >
            {formik =>(


                <Grid>
                <Form className="ui form">
                    <Input label="Name" name="name" type="text"/>
                    <Input label="Email" name="email" type="email"/>
                    <Input label="Password" name="password" type="password"/>
                    <Input label="Confirm Password" name="confirmPassword" type="password"/>
                    <Button text="submit" color="blue"/>
                </Form>
                </Grid>

            )}
        </Formik>
    )
}

export default FormData;
