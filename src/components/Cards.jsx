import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-white text-[#000300]'>
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 border rounded-xl hover:scale-105 hover:shadow-md duration-300">
          <img src={Single} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-5xl font-bold'>$149</p>
          <div className="text-center font-medium">
              <p className='py-2 border-b mx-8 mt-8'>500GB storage</p>
              <p className='py-2 border-b mx-8'>1 User Allowed</p>
              <p className='py-2 border-b mx-8'>Send up to 2GB</p> 
          </div>
          <button className='bg-[#00df9c] w-[200px] rounded-md font-medium mx-auto my-8 py-3'>Start Trial</button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 border rounded-xl hover:scale-105 hover:shadow-md duration-300">
          <img src={Double} alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent '/>
          <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
          <p className='text-center text-5xl font-bold'>$199</p>
          <div className="text-center font-medium">
              <p className='py-2 border-b mx-8 mt-8'>1TB storage</p>
              <p className='py-2 border-b mx-8'>3 Users Allowed</p>
              <p className='py-2 border-b mx-8'>Send up to 10GB</p> 
          </div>
          <button className='text-[#00df9c] bg-[#000300] w-[200px] rounded-md font-medium mx-auto my-8 py-3'>Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 border rounded-xl hover:scale-105 hover:shadow-md duration-300">
          <img src={Triple} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
          <p className='text-center text-5xl font-bold'>$299</p>
          <div className="text-center font-medium">
              <p className='py-2 border-b mx-8 mt-8'>5TB storage</p>
              <p className='py-2 border-b mx-8'>10 User Allowed</p>
              <p className='py-2 border-b mx-8'>Send up to 20GB</p> 
          </div>
          <button className='bg-[#00df9c] w-[200px] rounded-md font-medium mx-auto my-8 py-3'>Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
