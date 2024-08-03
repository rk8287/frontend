import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './components/Home/Home';
import MainFooter from './pages/MainFooter/MainFooter';
import About from './pages/About/About';
import Cancellation from './pages/Cancellation/Cancellation';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Privacy from './pages/Privacy/Privacy';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/cancellation'} element={<Cancellation/>}/>
        <Route path={'/disclaimer'} element={<Disclaimer/>}/>
        <Route path={'/privacy'} element={<Privacy/>}/>
        
      </Routes>
      <MainFooter/>
    </Router>
  );
}

export default App;
