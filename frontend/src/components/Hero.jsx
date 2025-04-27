import React from "react";
import hero_logo from "../assets/Abstract Design.png";
import { GiPlayButton } from "react-icons/gi"

function Hero() {
  return (
    <div className="text-white bg-neutral-900 ">
      <div className="relative w-full h-[400px] ">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-900/50 to-neutral-900/90"></div>
        <div className="absolute top-[-20px] left-0 w-full h-full flex items-center justify-center">
          <img src={hero_logo} alt="logo" className="has-[200px] w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[48px]">The Best Streaming Experience</h1>
        <p className="text-center text-[14px] max-w-[600px] mt-1 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quo
          nulla, minus saepe quae autem ut architecto fuga minima, cupiditate a
          fugiat rem odio quos, temporibus porro culpa ipsa iusto?
        </p>
        <div className="flex items-center justify-center gap-2 py-1 px-3 bg-red-600 mt-2 rounded-md text-lg">
          <GiPlayButton />
          <span className="text-[14px] font-bold">Start Watching Now</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
