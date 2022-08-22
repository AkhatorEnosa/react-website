import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-20 text-white'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 py-6">
        <div className='px-10 md:col-span-2 mx-auto md:mx-0 text-center md:text-left pb-6'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimise your flow?</h1>
          <p>Sign up to our Newsletter and stay up to date.</p>
        </div>
        <div className="my-4 px-4">
           <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input type="email" placeholder='Enter your email' className='p-3 flex w-full rounded-md text-black'/>
              <button className="bg-[#00df9c] w-[200px] rounded-md font-medium ml-3 my-2 py-3 text-black"> Notify Me! </button>
           </div>
           <p className='text-center md:text-left'>We care about your privacy. Read our privacy policy.</p>
        </div>
      </div> 
    </div>
  );
};

export default Newsletter;
