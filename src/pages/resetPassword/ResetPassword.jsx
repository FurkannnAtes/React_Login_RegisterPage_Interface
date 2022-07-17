import React from 'react'


import "./ResetPassword.css"

const ResetPassword = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="back-page"><button type='button' onClick={() => window.history.go(-1)}><i className="bi bi-arrow-left"></i>Back</button></div>
                <div className="resetPassword-form-container">
                    <h2 className="resetPassword-form-title">Reset your password</h2>

                    <form action="">

                        <label className="resetPassword-form-labels" >
                            <i className="bi bi-key"></i>
                            <input
                                className="resetPassword-form-password"
                                type="password"
                                required
                                placeholder="********"

                            />
                        </label>

                        <label className="resetPassword-form-labels" >
                            <i className="bi bi-key"></i>
                            <input
                                className="resetPassword-form-password"
                                type="password"
                                required
                                placeholder="Confirm Password"

                            />
                        </label>

                        <h4 className='resetPassword-form-text'>Minimum 10 characters, Must cotnain upper and lowercase, numbers, and symbols</h4>
                        <button className="resetPassword-animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Reset password
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword