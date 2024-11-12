import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import './App.css';

const App = () => {
  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/login/*' element={<Login />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;