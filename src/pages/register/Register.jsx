import React from 'react'
import { Link } from "react-router-dom";

import "./Register.css"

const Login = () => {
    return (
        <div className="wrapper">
            <div className="container">

                <div className="register-form-container">
                    <h2 className="register-form-title">Create your account</h2>
                    <h4 className="register-form-subTitle">Created for deveopers by developers</h4>
                    <form action="">
                        <label className="register-form-labels">
                            <i className="bi bi-person-circle"></i>
                            <input
                                className="register-form-name"
                                type="text"
                                required
                                placeholder="Full name"
                            />
                        </label>
                        <label className="register-form-labels">
                            <i className="bi bi-envelope"></i>
                            <input
                                className="register-form-email"
                                type="email"
                                required
                                placeholder="Email adress"
                            />
                        </label>
                        <label className="register-form-labels">
                            <i className="bi bi-key"></i>
                            <input
                                className="register-form-password"
                                type="password"
                                required
                                placeholder="Password"
                            />
                        </label>
                        <label className="agreement"
                        ><input type="checkbox" name="agreement" id="agreement" required />
                            I agree to & the Terms  Conditions
                        </label>
                        <button type='submit' className="register-animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign Up
                        </button>
                    </form>
                    <h4 className="register-form-text">
                        Already have an account ? <Link to="login" className="register-sign-link">Sign In</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Login