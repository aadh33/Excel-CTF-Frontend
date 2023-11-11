import React from 'react';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import { MainPage } from './pages';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Animation from './components/Animation/Animation';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/"element={<MainPage/>}/>
      </Routes>
      <Animation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
