import React from "react";
import Image from "next/image";
import category from "./data/category";

const Hero = () => {
  return (
    <div className="text-center">
      <Image
        src="/bg.jpg"
        alt="bg"
        width={1200}
        height={400}
        className="flex w-full absolute "
      />
      <div className="pt-[100px] relative">
        <h1>
          <Image
            src="big-logo.svg"
            alt="big-logo"
            width={330}
            height={300}
            className="flex flex-center mx-auto p-5"
          />
        </h1>
        <h2 className="text-[22px]  text-[#1C2B30] ">
          Your Amazing Country
        </h2>
        <div className="flex gap-1 items-center justify-center">
          <input
            type="text"
            placeholder="Search Anything..."
            className="p-3 px-6 border-[1px] w-[34%] m-4 rounded-full shadow-md"
          />
          <button className="bg-[#1C2B30] p-2 rounded-full shadow-md cursor-pointer
          hover:scale-105 transition-all duration-500 ease-in-out">
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
        <div>
          <h2 className="mt-[4px]">Or Browse The Category</h2>
          <div className="flex gap-3 m-4 justify-center">
            {category.map((item,index)=> (
              <div className="border[1px] w-[60px] h-[60px] flex items-center p-4 bg-white rounded-full">
                <Image src={item.icon} alt={item.name}
                 width={30} height={30}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
