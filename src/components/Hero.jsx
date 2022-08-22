import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[150px] w-full mx-auto h-[70vh] text-center flex flex-col">
        <p className="text-[#00df9c] font-bold pb-2 uppercase">I am a Web Developer</p>
        <h1 className="md:text-7xl font-bold sm:text-6xl text-4xl md:py-6">Akhator Osakhogba</h1>

        <div className="md:text-5xl sm:text-4xl text-xl font-light text-white mt-3">
          {/* <p className="md:text-5xl sm:text-4xl text-xl font-light">Fast, Flexible and Available for</p> */}
          <Typed
                strings={[
                    'Fast',
                    'Flexible ',
                    'Efficient',
                    'Available']}
                    typeSpeed={70}
                    backSpeed={20}
                    loop
                />
        </div>
        <button className="bg-[#00df9c] w-[200px] rounded-md font-medium mx-auto my-8 py-3">Hire Me!</button>
      </div>
    </div>
  );
}

export default Hero;
