// src/components/DomainManager.jsx
import { useState } from 'react';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { DomainService } from '../services/domainService';

function DomainManager() {
  const currentAccount = useCurrentAccount();
  const [domainName, setDomainName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [websiteCode, setWebsiteCode] = useState('');
  const [status, setStatus] = useState('');

  async function handleRegisterDomain() {
    if (!currentAccount) {
      setStatus('Please connect your wallet first');
      return;
    }

    try {
      setStatus('Checking if domain exists...');
      const exists = await DomainService.checkDomain(domainName);

      if (exists) {
        setStatus('Domain already exists. Try another name.');
        return;
      }

      setStatus('Registering domain...');
      const txId = await DomainService.assignDomain(domainName, ipAddress, websiteCode);
      setStatus(`Domain registered successfully! TX: ${txId}`);
    } catch (error) {
      console.error(error);
      setStatus(`Error: ${error.message}`);
    }
  }

  return (
    <div>
      <h2>Register Domain</h2>
      <div>
        <label>
          Domain Name:
          <input
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          IP Address:
          <input
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Website Code:
          <textarea
            value={websiteCode}
            onChange={(e) => setWebsiteCode(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleRegisterDomain}>Register Domain</button>
      {status && <div className="status">{status}</div>}
    </div>
  );
}

export default DomainManager;
