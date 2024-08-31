// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SWPList from './components/SWPList';
import SWPForm from './components/SWPForm';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SWPList />} />
          <Route path="/create" element={<SWPForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
