import React from "react";
import Products from "./Products";

const Card = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="w-[500px] mx-auto border text-center space-y-2">
            <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
            <p className="text-gray-500">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>
        </div>
        <div className="text-center space-x-2 rounded-full p-1 border border-base-300 w-[200px] mx-auto my-4">
          <button className="btn rounded-full">Products</button>
          <button className="btn rounded-full">Cart (2)</button>
        </div>
      </div>
      <Products></Products>
    </>
  );
};

export default Card;
