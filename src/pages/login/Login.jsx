import React from 'react'
import { Link } from "react-router-dom";

import "./Login.css"

const Login = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="back-page"><button type='button' onClick={() => window.history.go(-1)}><i className="bi bi-arrow-left"></i>Back</button></div>
                <div className="login-form-container">
                    <h2 className="login-form-title">Sing in</h2>
                    <h4 className="login-form-subTitle">Login to manage your account</h4>
                    <form action="">

                        <label className="login-form-labels" >
                            <i className="bi bi-envelope"></i>
                            <input
                                className="login-form-email"
                                type="email"
                                required
                                placeholder="Email adress"
                            />
                        </label>
                        <label className="login-form-labels" >
                            <i className="bi bi-key"></i>
                            <input
                                className="login-form-password"
                                type="password"
                                required
                                placeholder="Password"
                            />
                        </label>
                        <label className="remember"
                        ><input type="checkbox" name="remember" id="remember" required />
                            Remember me
                        </label>
                        <button className="login-animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign In
                        </button>
                    </form>
                    <h4 className="login-form-text">
                        Dont't have an account ? <Link to="/" className="login-sign-link">Sign up</Link>
                    </h4>
                    <h4 className="login-form-text">
                        Forgot my <Link to="/forgotpassword" className="login-sign-link">password</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Login