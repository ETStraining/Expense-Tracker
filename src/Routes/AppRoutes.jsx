import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from '../component/Admin/DashBoard';
import Home from '../component/Home/Home';


const AppRoutes = () => {
  return (
    <Router>
      
      <Routes>
       
      <Route path='/admin' element={<DashBoard/>} />
      <Route path='/' element={<Home/>} />
      
      </Routes>
    </Router>
  );
}

export default AppRoutes;
