import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cafe from './components/cafe/Cafe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cafe" element={<Cafe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
