import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-100'>
      <div>
        <h1 className="uppercase w-full text-3xl font-bold text-[#00df9a]">react_</h1>
        <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ea in id? Impedit pariatur veniam ipsam harum. Quo, laborum placeat!</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaDribbbleSquare size={30}/>
          <FaFacebookSquare size={30}/>
          <FaTwitterSquare size={30}/> 
          <FaGithubSquare size={30}/>
          <FaInstagram size={30}/> 
        </div>
      </div>

      <div className="md:col-span-2 flex justify-between md:mt-12">
        <div>
          <h6 className='font-medium text-gray-400 '>Solutions</h6>
          <ul>
            <li className='text-sm py-2'>Analytics</li>
            <li className='text-sm py-2'>Marketing</li>
            <li className='text-sm py-2'>Commerce</li>
            <li className='text-sm py-2'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400 '>Support</h6>
          <ul>
            <li className='text-sm py-2'>Pricing</li>
            <li className='text-sm py-2'>Documentation</li>
            <li className='text-sm py-2'>Guides</li>
            <li className='text-sm py-2'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400 '>Company</h6>
          <ul>
            <li className='text-sm py-2'>About </li>
            <li className='text-sm py-2'>Blog</li>
            <li className='text-sm py-2'>Jobs</li>
            <li className='text-sm py-2'>Careers</li>
            <li className='text-sm py-2'>Press</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400 '>Legal</h6>
          <ul>
            <li className='text-sm py-2'>Claim </li>
            <li className='text-sm py-2'>Policy</li>
            <li className='text-sm py-2'>Terms & Condition</li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
