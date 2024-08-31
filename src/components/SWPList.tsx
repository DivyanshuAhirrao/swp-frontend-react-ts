// src/components/SWPList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SWP } from '../types';

const SWPList: React.FC = () => {
  const [swps, setSwps] = useState<SWP[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getSWPLists = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/swp');
      setSwps(response.data);
    } catch (err) {
      setError('Failed to fetch SWP list.');
      console.error(err);
    }
  };

  useEffect(() => {
    getSWPLists();
  }, []);

  return (
    <div className="swp-list-container">
      <div className="swp-list-header">
        <h2>SWP List</h2>
        <button onClick={() => window.location.href = '/create'}>Fill SWP Form</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="swp-list-items">
        {swps.map((swp) => (
          <div key={swp._id} className="swp-list-item">
            <h3>User ID: {swp.userId}</h3>
            <p>Investment Amount: ${swp.investmentAmount}</p>
            <p>Withdrawal Amount: ${swp.withdrawAmount}</p>
            <p>Frequency: {swp.frequency}</p>
            <p>Start Date: {new Date(swp.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(swp.endDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SWPList;
