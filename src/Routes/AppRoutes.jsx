import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../component/Home/Home';
import DashBoard from '../component/Dashboard/DashBoard';
import Register from '../component/Home/Authentication/SignUp';
import Login from '../component/Home/Authentication/Login';



const AppRoutes = () => {
  return (
    <Router>
      
      <Routes>
       
      <Route path='/user_dashboard/*' element={<DashBoard/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      
      </Routes>
    </Router>
  );
}

export default AppRoutes;
