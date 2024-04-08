import React, { useState } from "react";
import Image from "next/image";
import category from "./data/category";
import { motion } from "framer-motion";

const Hero = ({ userInput }: any) => {
  const [searchInput, setSearchInput] = useState<string>();
  return (
    <div className="text-center relative">
      <div className="absolute h-[100vh] bg-gradient-to-t from-[#fff] via-[#ffffff3d] to-transparent w-full"></div>
      <div className="absolute h-[100vh] bg-gradient-to-b from-[#02356B] via-transparent to-transparent w-full"></div>
      <div className="h-[300px]">
        <video loop muted autoPlay className="w-full ">
          <source src="./video-9.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.div
        initial={{ y: "2rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
        className=" relative -mt-40"
      >
        <h1>
          <Image
            src="big-logo.svg"
            alt="big-logo"
            width={330}
            height={300}
            className="flex flex-center mx-auto p-5"
          />
        </h1>
        <h2 className="text-[22px]  text-white font-semibold ">
          Your Amazing Country
        </h2>
        <div className="flex gap-1 items-center justify-center">
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Anything..."
            className="p-3 px-6 border-[1px] outline-[#02356B] w-[34%] m-4 rounded-full shadow-md"
          />
          <button
            onClick={() => userInput(searchInput)}
            className="bg-[#02356B] p-2 rounded-full shadow-md cursor-pointer
          hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-[4px] text-lg text-white">
            Or Browse The Category
          </h2>
          <div
            className="grid grid-cols-3 md:grid-cols-7 
          w-[50%] justify-center gap-4 mt-4"
          >
            {category.map((item, index) => (
              <div
                key={index}
                className="border-[1.5px] w-[60px] h-[60px] hover:border-[#02356B] hover:scale-110 transition-all duration-500 ease-in-out  
              cursor-pointer flex items-center p-4 bg-white rounded-full"
              >
                <Image src={item.icon} alt={item.name} width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
