import React from 'react';
import Laptop from '../assets/laptop.jpeg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="Analytics" className='w-[500px] mx-auto my-4'/>
        <div className="flex flex-col justify-center md:px-6">
          <p className='uppercase text-[#00df9a] font-bold text-center md:text-left'>Data analytics dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left'>Manage Data Analytics Centrally</h1>
          <p className='text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eum, odio consequatur placeat illo voluptas mollitia earum ipsa omnis quaerat recusandae voluptatibus modi ea labore doloribus tenetur veritatis. Fugit, maiores sunt voluptas nostrum rem commodi tempore, explicabo quis sit pariatur ut asperiores accusantium praesentium cupiditate labore dolore fugiat. Laborum porro possimus consequatur earum hic. Architecto exercitationem fugiat quasi perspiciatis!</p>
          <button className="bg-[#000300] text-[#00df9c] w-[200px] rounded-md font-medium my-8 py-3 mx-auto md:mx-0">Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
