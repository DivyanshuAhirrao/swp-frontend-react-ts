// src/components/SWPForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { SWP } from '../types';
import { useNavigate } from 'react-router-dom';

const SWPForm: React.FC = () => {
  const [formData, setFormData] = useState<SWP>({
    userId: '',
    investmentAmount: 0,
    withdrawAmount: 0,
    frequency: 'monthly',
    startDate: '',
    endDate: '',
  });
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/swp', formData)
      .then(response => alert('SWP Plan created successfully!'))
      .catch(error => console.error('Error creating SWP plan:', error));
      navigate('/');
  };

  return (
   <div className='swp-form-container'>
     <form className="swp-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        placeholder="User ID"
        required
      />
      <input
        type="number"
        name="investmentAmount"
        value={formData.investmentAmount}
        onChange={handleChange}
        placeholder="Investment Amount"
        required
      />
      <input
        type="number"
        name="withdrawAmount"
        value={formData.withdrawAmount}
        onChange={handleChange}
        placeholder="Withdrawal Amount"
        required
      />
      <select
        name="frequency"
        value={formData.frequency}
        onChange={handleChange}
      >
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
      </select>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Create SWP</button>
    </form>
   </div>
  );
};

export default SWPForm;
