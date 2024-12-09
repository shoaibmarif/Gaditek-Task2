import React, { useState } from "react";
import logo from "../../public/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const Navigation = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div className="">
      {/* Navigation Bar  */}
      <ul className="relative flex items-center justify-between text-[#232233] uppercase text-[20px] bg-white rounded-[5px] shadow-md h-[60px] px-3">
        <div className="items-center lg:gap-x-6 hidden lg:flex ">
          <li>
            <a href="#" className="underline text-[#5956E9] ml-9">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </div>
        <div
          className="bg-white lg:left-1/2 lg:top-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] 
                      rounded-[5px] shadow-md w-[200px] lg:h-[90px] h-full flex items-center justify-center py-2 px-3
                      lg:absolute relative
                      "
        >
          <img src={logo} alt="Appolly Logo" />
        </div>
        <div className="items-center justify-center lg:gap-x-6 hidden lg:flex">
          <li>
            <a href="#">Screenshot</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <button className="text-white bg-[#5956E9] px-4 rounded-[5px] py-2">
              Dashboard
            </button>
          </li>
        </div>
        <div className="block lg:hidden ">
          {modelOpen ? (
            <IoMdClose
              className="cursor-pointer"
              onClick={() => setModelOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => setModelOpen(true)}
            />
          )}
        </div>
        <div
          className={`h-[100vh] fixed bg-gray-600 top-0 ${
            !modelOpen ? "left-[-300px]" : "left-[0px]"
          }  transition-all w-[300px] shadow-xl z-[9999]`}
        >
          <ul className="flex items-center justify-center flex-col gap-y-10 text-white font-bold mt-10 ">
            <li className="border-b-slate-500 border-b-2">Home</li>
            <li className="border-b-slate-500 border-b-2">About</li>
            <li className="border-b-slate-500 border-b-2">Features</li>
            <li className="border-b-slate-500 border-b-2">ScreenShot</li>
            <li className="border-b-slate-500 border-b-2">Blog</li>
          </ul>
        </div>
      </ul>
    </div>
  );
};
