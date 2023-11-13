import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ChallengePage  from './pages/ChallengePage/ChallengePage.jsx';
import  RegisterPage  from './pages/RegisterPage/RegisterPage.jsx'
import  MainPage  from './pages/MainPage/MainPage.jsx'
import ScrollToTop from './utils/ScrollToTop.jsx';

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
