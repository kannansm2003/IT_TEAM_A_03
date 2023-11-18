import React, { useState } from 'react';

const CSRGenerator = () => {
 const [privateKey, setPrivateKey] = useState('');
 const [publicKey, setPublicKey] = useState('');
 const [csr, setCsr] = useState('');

 const generateKeys = () => {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    setPrivateKey(privateKey.export({ type: 'pkcs1', format: 'pem' }));
    setPublicKey(publicKey.export({ type: 'spki', format: 'pem' }));
 };

 const generateCSR = () => {
    const csr = crypto.createCertificateRequest({
      publicKey,
      privateKey,
      subject: {
        commonName: 'www.yourdomain.com',
        organizationName: 'Your Company',
        organizationalUnitName: 'IT',
        localityName: 'Your City',
        countryName: 'US',
        emailAddress: 'your@email.com',
      },
    });

    setCsr(csr.export({ type: 'pkcs10', format: 'pem' }));
 };

 return (
    <div>
      <button onClick={generateKeys}>Generate Keys</button>
      <textarea value={privateKey} readOnly />
      <textarea value={publicKey} readOnly />
      <button onClick={generateCSR}>Generate CSR</button>
      <textarea value={csr} readOnly />
    </div>
 );
};

export default CSRGenerator;