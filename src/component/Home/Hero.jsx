import React from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'react-typewriter-effect';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#a6f9bd] font-bold p-2'>
          MANAGE YOUR EXPENSE
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          control your Money 
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible budgeting 
          </p>
          <Typewriter
            options={{
              strings: ['BTB', 'BTC', 'SASS'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>for start creating your budget and save ton of money & SASS platforms.</p>
       <NavLink to={'/signup'}> <button className='bg-[#a6f9bd] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></NavLink>
      </div>
    </div>
  );
};

export default Hero;
