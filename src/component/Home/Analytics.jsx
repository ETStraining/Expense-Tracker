import React from 'react';
import Laptop from '../../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#a6f9bd] font-bold '>Expenses DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Expenses Centrally</h1>
          <p>
          Effective expense management is key to financial stability. It involves tracking, analyzing, and controlling your spending to ensure you're living within your means and saving for future goals. By managing expenses wisely, you can reduce financial stress, make informed decisions, and achieve greater financial freedom.
          </p>
          <button className='bg-black text-[#a6f9bd] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
