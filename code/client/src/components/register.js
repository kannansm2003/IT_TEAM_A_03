import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [panNum, setPanNum] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInsertSubmit = async (event) => {
    event.preventDefault();
    try {
      const insertResponse = await axios.post('http://localhost:3000/insert', {
        username: username,
        password: password,
        name: name,
        gmail: gmail,
        pan_num: panNum,
        aadhar: aadhar,
        mobile: mobile,
      });
      setMessage(insertResponse.data.message);
      navigate('/');
    } catch (error) {
      console.error(error);
      setMessage('Error registering user');
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-5 p-5 shadow-sm border rounded-5">
        <h1 className="text-center mb-4 text-primary">Register with Bank Server</h1>
        <form onSubmit={handleInsertSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email (Gmail)"
              value={gmail}
              onChange={(event) => setGmail(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="PAN Number"
              value={panNum}
              onChange={(event) => setPanNum(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Aadhar Number"
              value={aadhar}
              onChange={(event) => setAadhar(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </div>
          {message && <p className="text-center">{message}</p>}
        </form>
        <br />
        <Link to="/">
          <button className="btn btn-primary w-100">LOGIN</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
