

import Accordion from './Accordion';

import Flipcard from './Flipcard';
import Navbar1 from './Navbar1';

function Page() {
  return (
    <>
    
    <Navbar1></Navbar1>
    <div className='flex flex-row items-center my-[50px] ml-[100px]'>
    <h3 className='text-xl text-gray-600'>
        
    <i class="fa-duotone fa-house"></i> &gt; Flashcard &gt; Mathematics &gt; <span className='text-blue-800'>(Relations and Functions)</span>
    </h3>
  </div><h2 className='text-3xl font-bold my-[50px] ml-[100px]  text-blue-700'>Relations and Functions(Mathematics)</h2>
    <Flipcard></Flipcard>
    <ul className='ml-[100px] flex flex-row w-[85%]  justify-between'>
    <li className='text-3xl text-blue-900'>HYggex</li>
    <li className='text-3xl font-bold  text-blue-700 flex items-center'>
        <button className='rounded-full w-12 h-12  bg-gradient-to-r from-blue-500 to-blue-900  pb-[50px] text-white font-bold text-[3rem]'>+</button>
        <span className="ml-2">Create flashcard</span>
    </li>
</ul>

    <h2 className='text-[3rem] text-blue-950 m-8 font-bold ml-[100px] '>FAQ</h2>
    <Accordion></Accordion>
    <Accordion>

    </Accordion>
    <Accordion></Accordion>
    <div className='mt-[50px]'></div>
    </>
  );
}

export default Page;

