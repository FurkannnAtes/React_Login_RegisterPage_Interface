import React from 'react'
import { Link } from "react-router-dom";

import "./SendCode.css"

const SendCode = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="back-page"><button type='button' onClick={() => window.history.go(-1)}><i className="bi bi-arrow-left"></i>Back</button></div>
                <div className="sendCode-form-container">
                    <div className="sendCode-img">
                        <img src="/images/Vector.png" alt="letter" style={{ width: "50px" }} />
                    </div>
                    <h2 className="sendCode-form-title">Email Instructions Sent</h2>
                    <h4 className="sendCode-form-subTitle">Please follow the  instructions we sent
                        to your inbox</h4>
                    <form action="">

                        <label className="sendCode-form-labels" >

                            <input
                                className="sendCode-form-code"
                                type="email"
                                required
                                placeholder="25486465"

                            />
                        </label>


                        <Link to="/resetpassword">  <button className="sendCode-animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SendCode