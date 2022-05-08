import React from 'react';
import { Routes, Route } from "react-router-dom";
import Mail from './pages/Mail';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/message/:id" element={<Mail />} />
      </Routes>
    </>
  );
}

export default App;
