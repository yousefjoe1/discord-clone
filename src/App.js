import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import LogIn from './components/Log_In/LogIn';
import Register from './components/Register/Register';
import UserHome from './components/UserHome/UserHome';


function App() {
  

  return (
    <div className='container-fluid'>
      <Header />
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;
