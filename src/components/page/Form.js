import React from 'react';
import { Formik, Form } from 'formik';
import { success, error } from '../../utils/message';
import Grid from '../UI/Grid';
import Header from '../UI/Header';
import ValidateInput from '../UI/ValidateInput';
import * as Yup from 'yup';
const FormData = () => {
    const image = "https://image.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg";

    //validate
    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password is not match')
            .required('Confirm password is required'),
    })

    return (
        <Grid>
            <Header title="Login" subtitle="Secure Your password" />
            <div className="ui grid" style={{ marginTop: '1%' }}>
                <div className="ten wide column">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            if(values){
                                success('Your response save in console')
                                console.log(values);
                            }else{
                                error('check your field error!')
                            }
                        }}
                        >
                        {formik => (
                    <Form className="ui form">
                        <ValidateInput label="Email" name="email" type="email"/>
                        <ValidateInput label="password" name="password" type="password"/>
                        <ValidateInput label="Confirm Password" name="confirmPassword" type="password"/>
                        <button className="ui button" type="submit">Submit</button>
                    </Form>
                        )}
                        </Formik>
                </div>
                <div className="six wide column">
                    <div className="ui image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </Grid >
    )
}

export default FormData;
