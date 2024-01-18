import React, { useState } from 'react';

function Flipcard() {
    const [ison, setIsOn] = useState(false);
    const handleclick =()=>{
        setIsOn(!ison)

    }
    return (
        <div className='w-full md:w-[700px] h-[400.19px] m-10 mb-60 md:ml-80'>
            <ul className='flex items-center justify-center flex-wrap my-8'>
                <li className='text-2xl md:text-lg text-gray-600 px-4 md:px-6 py-2 md:py-3 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 hover:font-bold'>Study</li>
                <li className='text-2xl md:text-lg text-gray-600 px-4 md:px-6 py-2 md:py-3 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 hover:font-bold'>Quiz</li>
                <li className='text-2xl md:text-lg text-gray-600 px-4 md:px-6 py-2 md:py-3 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 hover:font-bold'>Test</li>
                <li className='text-2xl md:text-lg text-gray-600 px-4 md:px-6 py-2 md:py-3 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 hover:font-bold'>Game</li>
                <li className='text-2xl md:text-lg text-gray-600 px-4 md:px-6 py-2 md:py-3 hover:text-blue-900 hover:border-b-2 hover:border-blue-900 hover:font-bold'>Others</li>
            </ul>

            <div  onClick={handleclick} className='w-full md:w-[700px] h-[350.13px] bg-gradient-to-r from-blue-500 to-blue-900 rounded-3xl flex items-center justify-center relative'>
                
                <div className="absolute top-0 left-0 p-4 md:p-8">
                    <i className="far fa-lightbulb text-lg md:text-2xl" style={{ color: "#ffffff" }}></i>
                </div>

                
                <div className="absolute top-0 right-0 p-4 md:p-8">
                    <i className="fas fa-volume-high text-lg md:text-2xl" style={{ color: "#ffffff" }}></i>
                </div>

               
                <h2 className='text-white text-2xl md:text-3xl mx-4 md:mx-0 text-center md:text-left'>
                    2x - 6y + 5x - 8 + 3x -7y
                </h2>
            </div>

            <div className='flex items-center justify-center'>
                <i className="fa-solid fa-rotate-right text-xl md:text-3xl m-2 my-4 mx-4 md:mx-12" style={{ color: "#140746" }}></i>
                <button className='rounded-full p-2 m-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold text-xl md:text-2xl'>&lt;</button>
                <h2 className='text-xl md:text-3xl text-black font-bold m-2 my-4 mx-4 md:mx-12'>01/10</h2>
                <button className='rounded-full m-2 w-10 h-10 md:w-12 md:h-12 p-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold text-xl md:text-2xl'>&gt;</button>
                <i className="fa-solid fa-expand text-xl md:text-3xl m-2 my-4 mx-4 md:mx-12"></i>
            </div>
        </div>
    );
}

export default Flipcard;
