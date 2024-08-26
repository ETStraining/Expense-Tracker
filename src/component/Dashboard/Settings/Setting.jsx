import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    <div className="relative inline-block text-left ml-0">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center rounded-md text-sm font-medium text-white"
        >
         
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
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
                  `block px-4 py-2 text-sm ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} w-full text-left`
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
