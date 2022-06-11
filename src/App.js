import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import HeroSection from './components/HeroSection/HeroSection';
import LogIn from './components/Log_In/LogIn';
import Register from './components/Register/Register';
import ServerOne from './components/ServerOne/ServerOne';
import UserHome from './components/UserHome/UserHome';
import Friends from './components/InnerUserPages/Friends/Friends';
import Nitro from './components/InnerUserPages/Nitro/Nitro';


function App() {
  

  return (
    <div className='app'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/' element={<UserHome />}>
          <Route path='home' element={<FirstPage />} >

            <Route path='friends' element={<Friends />} />
            <Route path='nitro' element={<Nitro />} />
          </Route>
          <Route path='server1' element={<ServerOne />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
