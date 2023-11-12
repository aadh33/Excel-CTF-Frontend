import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChallengePage, MainPage, RegisterPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/challenge" element={<ChallengePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
