import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [email, setEmail] = useState(localStorage.getItem('userEmail') || '');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const generateOTP = () => {
        axios.post('http://localhost:3000/generate-otp', { email })
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error(error);
                setMessage('Error generating OTP');
            });
    };

    const logout = () => {
        // Clear the user's session (e.g., remove tokens or user data from local storage)
        // Redirect the user to the login page
        navigate('/');
    };

    const verifyOTP = () => {
        axios.post('http://localhost:3000/verify-otp', { email, otp })
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error(error);
                setMessage('Error verifying OTP');
            });
    };

    return (
        <div className="vh-150 d-flex justify-content-center p-3 align-items-center">
            <div className="row w-50">
                <div className="row">
                    <div className="col-md-8 offset-md-2 p-5 rounded-5 border border">
                        <h1 className="text-center text-primary p-1">  Verification Page</h1>
                        <p className="text-center"></p>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email:</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    id="inputEmail"
                                    value={email}
                                    readOnly
                                />
                            </div>
                            <div className="d-flex align-items-center justify-content-center ">
                                <button type="button" className="btn btn-primary w-50" onClick={generateOTP}>Generate OTP</button>
                            </div>
                        </form>

                        <form className="mt-3">
                            <div className="mb-3">
                                <label htmlFor="inputOTP" className="form-label">Enter the OTP:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputOTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="button" className="btn btn-primary w-50" onClick={verifyOTP}>Verify OTP</button>
                            </div>
                        </form>

                        <div className="mt-4 align-items-center justify-content-center">
                            <button type="button" className="btn btn-primary btn-lg" onClick={logout}>Logout</button>
                            <p className="mt-2">{message}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
