import React from 'react';

function Navbar1() {
  return (
    <>    <div style={{ marginLeft: '80px' }} className='navbar flex flex-col w-[85%] ml-[100px] justify-between sm:flex-row sm:mx-8 sm:ml-0 sm:mt-8'>
    <div className='w-full sm:w-[191px] h-[39px] mt-4 sm:mt-8 sm:ml-4 border-solid border-2 px-4 sm:px-14 border-sky-500'>
        HYggex
      </div>
      <ul className='flex flex-col sm:flex-row w-full sm:w-[525px] h-auto sm:h-[48px] mt-4 sm:mt-8 sm:ml-4 gap-4'>
        <li className='w-full sm:w-[94px] h-[22px] sm:h-auto sm:gap-40'>Home</li>
        <li className='w-full sm:w-[94px] h-[22px] sm:h-auto sm:gap-40'>Flashcard</li>
        <li className='w-full sm:w-[94px] h-[22px] sm:h-auto sm:gap-40'>Contact</li>
        <li className='w-full sm:w-[35px] h-[22px] sm:h-auto'>FAQ</li>
        <li className='w-full sm:w-[128px] h-[40px] sm:h-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-10 gap-2 sm:gap-20 rounded-full'>
          Login
        </li>
      </ul>
    </div>
    </>

  );
}

export default Navbar1;
