import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPersonCircle } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { TbMessageReport } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { IoHelpBuoy } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
const SideBar = () => {
  return (
    <div className=' h-[100vh] w-[15vw] fixed left-0 bg-white  '>
    {/* bg-[#6a048e] */}
    {/* bg-[#2f013f] */}

       <div className='flex   flex-col    items-center  '>
       <div className='mt-3 text-3xl font-roboto font-bold'>
            X-penses
          </div>
          
          
        <ul className=' font-roboto '>
          <li className='mt-5 text-2xl'>
          <NavLink to={'/'}>
          <div className='flex gap-2 items-center'>
              <TiHome/>
              <p> DashBoard</p>
            </div>
          </NavLink>

          </li>
              
            <li className='mt-8'>
            <NavLink to={"/all_expenses"}>
            <div className='flex gap-1 items-center'><GiPayMoney/><p>Expense</p></div></NavLink>
            </li>
            
            <li  className='mt-2'>
            <NavLink to={"/income"}>
            <div className='flex gap-1 items-center'><GiTakeMyMoney/><p>Income</p></div></NavLink>
            </li>
            <li  className='mt-2'>
            <NavLink to={"/category"}>
            <div className='flex gap-1 items-center'>
               <p> <BiCategory/></p>
              <p>Category</p>
              </div></NavLink>
            </li>
            <li  className='mt-2'>
            <NavLink to={'/all_users'}>
            <div className='flex gap-1 items-center'>
              <p><FaUsers/></p>
              <p>Users</p>
              </div></NavLink>
            </li>
            <li  className='mt-2'>
            <NavLink>
              <div className='flex gap-1 items-center'>
                <p><TbMessageReport/></p>
                <p>Reports</p>
              </div>
            </NavLink>
            </li>
            <li  className='mt-2'>
            <NavLink><div className='flex gap-1 items-center'>
              <p><IoMdNotifications/></p>
              <p>Notifications</p></div></NavLink>
            </li>
            <li  className='mt-2'>
            <NavLink>
              <div className='flex gap-1 items-center'>
                <p><IoHelpBuoy/></p>
                <p>Help/Support</p></div></NavLink>
            </li>
            <li  className='mt-2'>
            <NavLink>
              <div className='flex gap-1 items-center'>
                <p><IoSettings/></p>
                <p>Settings</p></div></NavLink>
            </li>
            <li  className='mt-2 '>
              <div className='absolute bottom-20 p-4 rounded-md flex items-center h-5 text-white  bg-[#020725]'>
              <NavLink>Logout</NavLink>
              </div>
            
            </li>
        </ul>
      
    </div>
    </div>
       
    
   
  )
}

export default SideBar
