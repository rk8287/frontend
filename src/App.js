import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './components/Home/Home';
import MainFooter from './pages/MainFooter/MainFooter';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        
      </Routes>
      <MainFooter/>
    </Router>
  );
}

export default App;
