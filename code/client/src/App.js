import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import OTP from './components/otpverify';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otpverify" element={<OTP />} />
      </Routes>
    </Router>
  );
}

export default App;
