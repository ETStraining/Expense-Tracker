import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import SideBar from '../LayOut/SideBar';
import Header from '../LayOut/Header';
import AddUser from './User/AddUser';
import All_User from './User/All_User';
import ExpenseOverView from './OverView/Expense_OverView';
import AllExpense from './ExpenseManagement/All_Expenses';
import All_Category from './Category/All_Category';
import All_Income from './Income/All_Incame';
import AddIncome from './Income/Add_Income';
import AddExpense from './ExpenseManagement/AddExpenses';
import UpdateExpense from './ExpenseManagement/UpdateExpenses';
import UpdateIncome from './Income/Update_Income';

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
            <Route path='/' element={ <ExpenseOverView />} />
            <Route path='/all_expense' element={<AllExpense />} />
            <Route path='/all_users' element={<All_User />} />
            <Route path='/category' element={<All_Category />} />
            <Route path='/income' element={<All_Income />} />
            <Route path='/add_user' element={<AddUser />} />
            <Route path='/add_income' element={<AddIncome />} />
            <Route path='/add_expense' element={<AddExpense />} />
            <Route path='/update_expense' element={<UpdateExpense />} />
            <Route path='/update_incame' element={<UpdateIncome />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
