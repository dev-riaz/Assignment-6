import React from "react";
import image1 from "../assets/user.png";
import image2 from "../assets/package.png";
import image3 from "../assets/rocket.png"
const StepCard = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mt-25">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Get Started in 3 Steps</h1>
          <p className="text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-8">
          <div className="shadow-sm gap-3 flex flex-col items-center text-center py-14 rounded-xl border border-gray-500/25">
            <div className="badge bg-linear-to-r from-[#6a12edf6] to-[#9514FA] rounded-full relative -top-11 left-32 font-bold text-white">
              01
            </div>
            <div className="w-20 h-20 bg-[#9614fa4b] flex justify-center items-center rounded-full">
              <img src={image1} alt="image" />
            </div>
            <h3 className="font-bold text-xl">Create Account</h3>
            <p className="text-gray-500">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
          <div className="shadow-sm gap-3 flex flex-col items-center text-center py-14 rounded-xl border border-gray-500/25">
            <div className="badge bg-linear-to-r from-[#6a12edf6] to-[#9514FA] rounded-full relative -top-11 left-32 font-bold text-white">
              02
            </div>
            <div className="w-20 h-20 bg-[#9614fa4b] flex justify-center items-center rounded-full">
              <img src={image2} alt="image" />
            </div>
            <h3 className="font-bold text-xl">Choose Products</h3>
            <p className="text-gray-500">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>
          </div>
          <div className="shadow-sm gap-3 flex flex-col items-center text-center py-14 rounded-xl border border-gray-500/25">
            <div className="badge bg-linear-to-r from-[#6a12edf6] to-[#9514FA] rounded-full relative -top-11 left-32 font-bold text-white">
              03
            </div>
            <div className="w-20 h-20 bg-[#9614fa4b] flex justify-center items-center rounded-full">
              <img src={image3} alt="image" />
            </div>
            <h3 className="font-bold text-xl">Start Creating</h3>
            <p className="text-gray-500">
             Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
