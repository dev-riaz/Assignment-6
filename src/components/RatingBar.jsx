import React from "react";

const RatingBar = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#6a12edf6] to-[#9514FA] grid md:grid-cols-3 grid-cols-1 gap-4 mb-10 items-center justify-center py-3">
        <div className="py-4 px-30 text-white">
          <h1 className="text-4xl  py-3 font-bold">50K+</h1>
          <p>Active Users</p>
        </div>
        <div className="py-4 px-30 text-white">
          <h1 className="text-4xl  py-3 font-bold">200+</h1>
          <p>Premium Tools</p>
        </div>
        <div className="py-4 px-30 text-white">
          <h1 className="text-4xl  py-3 font-bold">4.9</h1>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default RatingBar;
