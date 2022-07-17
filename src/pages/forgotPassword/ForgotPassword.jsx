import React from 'react'
import { Link } from "react-router-dom";

import "./ForgotPassword.css"

const ForgotPassword = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="back-page"><button type='button' onClick={() => window.history.go(-1)}><i className="bi bi-arrow-left"></i>Back</button></div>
                <div className="forgot-form-container">
                    <h2 className="forgot-form-title">Forgot Password ?</h2>
                    <h4 className="forgot-form-subTitle">Please enter your registered email address.
                        We'll send Instructions to help reset your password.</h4>
                    <form action="">

                        <label className="forgot-form-labels" >
                            <i className="bi bi-envelope"></i>
                            <input
                                className="forgot-form-email"
                                type="email"
                                required
                                placeholder="Example@hotmail.com"

                            />
                        </label>


                        <Link to="/sendcode">  <button className="forgot-animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sent Resent Instructions
                        </button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword