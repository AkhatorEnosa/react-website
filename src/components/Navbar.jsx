import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// AiOutlineMenu

const Navbar = () => {
  const [nav, setNav ] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto p-4 text-white">
      <h1 className="uppercase w-full text-3xl font-bold text-[#00df9a]">react_</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-800 bg-[#000300] transition-all ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] hidden md:hidden'}>
        <h1 className="uppercase w-full text-3xl font-bold  text-[#00df9a] pt-3 m-4">react_</h1>
        <ul className="uppercase p-3">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}


export default Navbar;
