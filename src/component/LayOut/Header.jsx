import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center   w-full z-30  px-8 mt-3 text-[#000300] top-0 sticky mb-0 pb-0 bg-[#e7edfa]">
        
        <div className="font-roboto">
          <p>Pages/Dashboard</p>
          <p className="text-3xl font-roboto text-[#144c90] font-bold">Main DashBoard</p>
        </div>
        <div className="m-1  lg:bg-slate-50 lg:w-80  rounded-3xl h-14 flex gap-3" >
        
          <div className='bg-gray-100 m-2 w-32 h-10 rounded-3xl flex items-center right-1'>
               <p className="m-1 flex gap-1 items-center"> <FaSearch/>
               Search</p>
        </div>
        <p className="flex text-xl  items-center"><IoIosNotifications/></p>
        <p className="flex text-xl  items-center"><FaMoon/></p>
       
        <p className="flex text-xl  items-center"><MdInfoOutline/></p>
      <NavLink to={'/user_dashboard/account-settings'}>
      <p className="flex text-5xl  items-center">
            <IoPersonCircle />
            
          </p>
      </NavLink>
        
        </div>
      </div>
     
    </div>
    
  );
};

export default Header;
