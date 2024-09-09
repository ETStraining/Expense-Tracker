import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { label: 'Dark Mode', path: '/dark-mode' },
    { label: 'User Management', path: '/user_dashboard/user_management' },
    { label: 'Account Settings', path: '/user_dashboard/account-settings' }
  ];

  return (
    <div className="absolute inline-block text-left ml-0 ">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center rounded-md text-sm font-medium text-white"
        >
         
        
           <div className='flex gap-2 text-2xl items-center'>
           <p>
                  <IoSettings />
                </p>
                <p>Settings</p>
           </div>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute ml-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <NavLink
                key={option.label}
                to={option.path}
                onClick={() => handleOptionClick(option.label)}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${isActive ? 'bg-gray-100 text-[#000300]' : 'text-[#000300] hover:bg-gray-100 hover:text-gray-900'} w-full text-left`
                }
                role="menuitem"
              >
                {option.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
