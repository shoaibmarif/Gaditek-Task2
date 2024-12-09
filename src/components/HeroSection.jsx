import React from "react";
import herosection from "../../public/assets/images/hero-section.png";
import playstore from "../../public/assets/images/playstore.png";
import appstore from "../../public/assets/images/appstore.png";

export const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="col-span-1 mt-20 flex items-center justify-center flex-col ">
        <div className="bg-white w-[90%] lg:max-w-[550px] relative">
          <div className="absolute border-[15px] lg:border-[20px] w-full lg:h-[120%] h-[110%] bg-transparent opacity-30  lg:top-[-10%] top-[-5%]  lg:left-[40px] left-[25px] "></div>
          <div className="relative px-6 py-8 z-[99] bg-white">
            <h2 className="font-extrabold text-[#5956E9] uppercase text-[48px]">
              relative A Great App Makes Your Life Better
            </h2>
            <p className="mt-5 text-[#6C6C72]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <h5 className="uppercase mt-7 text-[#232233]  text-[25px]">
              Download App Now
            </h5>
            <div className="flex items-center justify-start mt-2 gap-x-1">
              <a href="#">
                <img src={playstore} alt="Google Store" />
              </a>
              <a href="#">
                <img src={appstore} alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 mt-20 flex items-end justify-end flex-col">
        <img src={herosection} className="w-[80%]" alt="Hero" />
      </div>
    </div>
  );
};
