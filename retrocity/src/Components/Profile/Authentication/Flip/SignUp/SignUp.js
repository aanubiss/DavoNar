import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import './SignUp.css'
import Error from '../Error'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email address')
        .max(30, 'Must be shorter than 255')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required'),
    name: Yup.string()
        .required('required'),
})

export default class SignUp extends Component {
    state={
        error: null
    }

    async signUp(value) {
        try {
            const data = await fetch("https://still-sands-43004.herokuapp.com/user/auth/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(value)
            })
            const fetchedData = await data.json()
            if (fetchedData.message) {
                this.setState({ error: fetchedData.message })
                this.props.profHandler()
            }
        } catch (e) {
            this.setState({ error: "Something went wrong" })
        }
    }

    render() {
        return (
            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    this.signUp(values)
                    resetForm()
                    setSubmitting(false)
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit }) => (
                        <form
                            className="modal-content"
                            onSubmit={handleSubmit}>
                            <div className="container">
                                <label htmlFor="text"><b>Name</b></label>
                                <input
                                    id="text"
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className={touched.name && errors.name ? 'has-error' : null} />
                                <Error touched={touched.name} message={errors.name} />

                                <label htmlFor="email"><b>Email</b></label>
                                <input
                                    id="text"
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? 'has-error' : null} />
                                <Error touched={touched.email} message={errors.email} />
                                <label htmlFor="password"><b>Password</b></label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className={touched.password && errors.password ? 'has-error' : null} />
                                <Error touched={touched.password} message={errors.password} />
                                <button type="submit">
                                    Sign Up
                        </button>
                                {this.state.error ? <p> {this.state.error} </p> : null}
                            </div>
                        </form>)}

            </Formik>
        )
    }
}
