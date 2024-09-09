import React from 'react';

const ExpenseBar = ({ spent, remaining, total }) => {
  const spentPercentage = (spent / total) * 100;

  return (
    <div className="m-5">
      <div className="flex text-sm font-mulish justify-between mb-1">
        <span>{spent}MRwf Spent</span>
        <span>{remaining}MRwf Remaining</span>
      </div>
      <div className="bg-gray-300 rounded-lg overflow-hidden h-4">
        <div
          className="bg-[#a6f9bd] h-full"
          style={{ width: `${spentPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ExpenseBar;
