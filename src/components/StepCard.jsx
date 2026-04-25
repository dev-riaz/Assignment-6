import React from "react";
import image from "../assets/user.png";
const StepCard = () => {
  return (
    <div>
      <div className="w-full  md:max-w-10/12 mx-auto mt-15">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Get Started in 3 Steps</h1>
          <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 mb-6 gap-8">
          <div className="shadow-sm gap-3 flex flex-col items-center text-center py-14 rounded-xl border border-gray-500/25">
            <div className="w-20 h-20 bg-[#9614fa4b] flex justify-center items-center rounded-full">
              <img src={image} alt="" />
            </div>
            <h3 className="font-bold text-xl">Create Account</h3>
            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="shadow-sm gap-3 flex flex-col items-center text-center py-14 rounded-xl border border-gray-500/25">
            <div className="w-20 h-20 bg-[#9614fa4b] flex justify-center items-center rounded-full">
              <img src={image} alt="" />
            </div>
            <h3 className="font-bold text-xl">Create Account</h3>
            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="shadow-sm gap-3 flex flex-col items-center text-center py-14 rounded-xl border border-gray-500/25">
            <div className="w-20 h-20 bg-[#9614fa4b] flex justify-center items-center rounded-full">
              <img src={image} alt="" />
            </div>
            <h3 className="font-bold text-xl">Create Account</h3>
            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
