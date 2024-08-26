import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SideBar from '../LayOut/SideBar';
import Header from '../LayOut/Header';
import Expense_OverView from './OverView/Expense_OverView';
import All_User from './User/All_User';

 import All_Income from './Income/All_Incame';
import AddUser from './User/AddUser';
import AddIncome from './Income/Add_Income';
import AddExpense from './ExpenseManagement/AddExpenses';
import All_Expenses from './ExpenseManagement/All_Expenses';
import UserProfile from './Profile/Profile';

const DashBoard = () => {
  return (
    <div className='flex justify-between bg-[#e7edfa] '>
      <div className='h-[80vh] lg:w-[15%] ml-1'>
        <SideBar />
      </div>
      <div className='w-[85%]'>
      <Header />
        <div className='mx-8'> 
        <Routes>
           <Route path='/' element={<Expense_OverView />} />
          <Route path='/all_expense' element={<All_Expenses />} />
          <Route path='/user_management' element={<All_User />} />

          <Route path='/income' element={<All_Income />} />
          <Route path='/add_user' element={<AddUser />} />
          <Route path='/add_income' element={<AddIncome />} />
          <Route path='/add_expense' element={<AddExpense />} /> 
          <Route path='/account-settings' element={<UserProfile />} /> 


          
        </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default DashBoard;
