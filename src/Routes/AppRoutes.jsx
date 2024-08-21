import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from '../component/Admin/DashBoard';



const AppRoutes = () => {
  return (
    <Router>
      
      <Routes>
       {/* <Route path='/' element={<DashBoard/>} /> */}
      <Route path='/user_dashboard/*' element={<DashBoard/>} />
      
      
      </Routes>
    </Router>
  );
}

export default AppRoutes;
