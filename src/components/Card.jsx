import React, { use, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const Card = ({ cardDataPromise, carts, setCarts }) => {
  const cards = use(cardDataPromise);
  const [activeTab, setActiveTab] = useState("products");
  // const [carts, setCarts] = useState([]);

  const tabHandle = () => {
    setActiveTab("products");
  };

  return (
    <>
      <div>
        <div className="">
          <div className="mx-w-[500px] mx-auto text-center space-y-2">
            <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
            <p className="text-gray-500">
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </div>
        </div>
        <div className="text-center space-x-2 rounded-full p-1 border border-base-300 w-[200px] mx-auto my-4 flex">
          <button
            onClick={tabHandle}
            className={`btn rounded-full ${activeTab === "products" ? "bg-linear-to-r from-[#6a12edf6] to-[#9514FA] text-white" : "bg-white"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`btn rounded-full ${activeTab === "cart" ? "bg-linear-to-r from-[#6a12edf6] to-[#9514FA] text-white" : "bg-white"}`}
          >
            {`Carts(${carts.length})`}
          </button>
        </div>
      </div>
      {activeTab === "products" && (
        <Products cards={cards} carts={carts} setCarts={setCarts}></Products>
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    </>
  );
};

export default Card;
