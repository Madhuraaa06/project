import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="max-w-md ml-[100px] mt-8">
      <div
        onClick={toggleAccordion}
        className="bg-white w-[100%] text-black py-2 px-4 rounded-md cursor-pointer flex flex-row relative border border-blue-500"
      >
        Question
        <div className='align-right'>
        <i className= {`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}` }  ></i>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 bg-white rounded-md border-l-2 border-r-2 border-b-2 border-blue-500">
          {/* Accordion content */}
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      )}
    </div>
    
    
</>
    
  );

};

export default Accordion;
