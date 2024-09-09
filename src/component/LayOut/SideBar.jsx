import React from "react";
import { NavLink } from "react-router-dom";
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
import DropdownMenu from "../Dashboard/Settings/Setting";
const SideBar = () => {
  return (
    <div className=" h-[100vh] w-[15vw] fixed left-0 bg-[#000300] text-white">
      {/* bg-[#6a048e] */}
      {/* bg-[#2f013f] */}

      <div className="flex   flex-col    items-center justify-center">
        <div className="mt-3 text-3xl font-mulish font-bold text-[#a6f9bd]">X-PENSE.</div>

        <ul className=" font-roboto text-2xl ">
          <li className="mt-5 ">
            <NavLink to={"/user_dashboard/"}>
              <div className="flex gap-2 items-center">
                <TiHome />
                <p> DashBoard</p>
              </div>
            </NavLink>
          </li>

          <li className="mt-8">
            <NavLink to={"/user_dashboard/all_expense"}>
              <div className="flex gap-2 items-center">
                <GiPayMoney />
                <p>Expense</p>
              </div>
            </NavLink>
          </li>

          <li className="mt-6">
            <NavLink to={"/user_dashboard/income"}>
              <div className="flex gap-2 items-center">
                <GiTakeMyMoney />
                <p>Income</p>
              </div>
            </NavLink>
          </li>
        
         
          <li className="mt-6">
            <NavLink>
              <div className="flex gap-2 items-center">
                <p>
                  <TbMessageReport />
                </p>
                <p>Reports</p>
              </div>
            </NavLink>
          </li>
          <li className="mt-6">
            <NavLink>
              <div className="flex gap-2 items-center">
                <p>
                  <IoMdNotifications />
                </p>
                <p>Notifications</p>
              </div>
            </NavLink>
          </li>
         
          <li className="mt-6">
          
              
                <DropdownMenu/>
                
         
          </li>
          <li className=" ">
            <div className="absolute bottom-8 p-4 rounded-md flex items-center h-5 text-[#000300]  bg-[#fadce4]">
              <NavLink to={"/"}>Logout</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
