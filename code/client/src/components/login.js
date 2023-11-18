import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate } from 'react-router-dom';

import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  //const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();
  const handleLogin = (event) => {
    
    event.preventDefault();
    console.log("handle login is called");
    axios.post('http://localhost:3000/login', {
      username: username,
      pwd: pwd,
    }).then((response)=>{
      console.log(response.data);
      if (response.data.message) {
       // setLoginStatus(response.data.message);
       alert("Incorrect Username or Password");
      } else {
        const userEmail = response.data.email;
      // Store email in local storage
      localStorage.setItem('userEmail', userEmail);
        navigate('/otpverify');
      }
    })
    .catch(error => {
      console.error('Axios Error:', error);
    });
  }

  return (
    <div>
      
      <div className="vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          <h2 className="text-center mb-4 text-primary">Login to Bank server</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
              <input type="text" className="form-control border border-primary" value={username}
                onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control border border-primary" value={pwd}
                onChange={(event) => setPwd(event.target.value)} />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" type="submit">Login</button>

            </div>
          </form>
          <div className="mt-3">
            <p className="mb-0  text-center">Don't have an account? </p>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
