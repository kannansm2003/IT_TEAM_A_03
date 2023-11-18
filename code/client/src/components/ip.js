import React, { useState, useEffect } from 'react';
//import macaddress from 'macaddress';

function App() {
 const [ipAddress, setIpAddress] = useState('');
 //const [macAddress, setMacAddress] = useState('');

 useEffect(() => {
  const fetchIpAddress = async () => {
   try {
    const response = await fetch('https://ipinfo.io/json');
    if (response.ok) {
     const data = await response.json();
     setIpAddress(data.ip);
    // setMacAddress(await macaddress.getMacAddress());
    }
   } catch (error) {
    console.error('Error fetching IP address and MAC address:', error);
   }
  };

  fetchIpAddress();
 }, []);

 return (
  <div className="App">
   <h1>Your IP Address and MAC Address:</h1>
   <p>IP Address: {ipAddress}</p>
  </div>
 );
}

export default App;