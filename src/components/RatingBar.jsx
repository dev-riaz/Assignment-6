import React from "react";

const RatingBar = () => {
  return (
    <>
      <div className="bg-linear-to-r from-[#6a12edf6] to-[#9514FA]">
        <div className="w-11/12 mx-auto grid md:grid-cols-3 md:mt-0 mt-8 grid-cols-2 gap-4 mb-10 py-14 items-center justify-center">
          <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl  py-3 font-bold">50K+</h1>
            <p>Active Users</p>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl  py-3 font-bold">200+</h1>
            <p>Premium Tools</p>
          </div>
          <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl  py-3 font-bold">4.9</h1>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingBar;
