import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
