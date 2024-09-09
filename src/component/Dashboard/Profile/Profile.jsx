import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {

 const handleLogout = ()=>{}

  return (
    <div className='min-h-[80vh] flex felx-col justify-center items-center text-center'>
        <div className='flex flex-col items-center justify-center'>
          <AccountCircleIcon sx={{fontSize:"9rem"}}/>
          <h1 className='py-5 text-2xl font-semibold'>Code With Fab</h1>
          <p>Email: fabdushime20@gmail.com</p>
          <p>Phone: +25078934546473</p>
          
         <div>
         <button className='bg-[#a6f9bd] mt-8 mr-3 p-3 rounded-md' onClick={handleLogout}>Edit</button>
         <button className='bg-red-600 mt-8  p-3 rounded-md' onClick={handleLogout}>Delete</button>
         </div>
        </div>
      
    </div>
  )
}

export default UserProfile
