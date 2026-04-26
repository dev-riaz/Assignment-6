import React from "react";
import banner from "../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen w-full  md:max-w-10/12 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="space-x-4">
            <div className="badge bg-[#E1E7FF] text-[#9514FA] rounded-full">
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-5xl font-bold mt-5">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. Explore Products
            </p>
            <button className="btn rounded-full text-white bg-linear-to-r from-[#6a12edf6] to-[#9514FA]">
              Explore Products
            </button>
            <button className="btn btn-outline text-[#9514FA] rounded-full">
              <CiPlay1></CiPlay1> Watch Demo
            </button>
          </div>
          <div className="p-2">
            <img className="md:max-w-100 " src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
