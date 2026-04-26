import React from "react";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const handleRemove = (cart) => {
    const filterArray = carts.filter((item) => item.id !== cart.id);
    setCarts(filterArray);
    toast.warn("Item Remove successful!", {
      theme: "colored",
    });
  };

  const totalPrise = carts.reduce((sum, cart) => sum + cart.price, 0);

  const proceedPayment = () => {
    setCarts([]);
    toast.success("Your order have been successful!", {
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="w-full  md:max-w-10/12 mx-auto border-2 border-base-300 rounded-2xl p-5">
        <div className="text-xl font-bold">
          <h1>Your Cart</h1>
        </div>
        {carts.length === 0 ? (
          <div className="flex flex-col justify-center items-center bg-base-200 p-5 gap-2 rounded-2xl mt-4">
            <img
              className="w-60 h-40 rounded-2xl"
              src="/public/placeholder.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold text-gray-400">
              Your Cart is empty
            </h1>
          </div>
        ) : (
          <>
            <div className="space-y-4 mt-4">
              {carts.map((cart) => (
                <div
                  key={cart.id}
                  className="bg-[#F9FAFC] p-5 flex justify-between rounded-2xl shadow"
                >
                  <div className="flex items-center gap-5">
                    <img className="w-20 rounded-full" src={cart.icon} alt="" />
                    <div className="">
                      <h1 className=" text-2xl font-bold">{cart.name}</h1>
                      <div className="">
                        <span className="font-bold text-gray-500">
                          {cart.price}$
                        </span>
                        <span className="text-gray-500"> /month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleRemove(cart)}
                      className="text-red-500 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 bg-white text-xl font-bold ">
                <h1 className="text-gray-500">Total</h1>
                <h1>{totalPrise}$</h1>
              </div>
              <button
                onClick={proceedPayment}
                className="btn w-full bg-linear-to-r from-[#6a12edf6] to-[#9514FA] rounded-full text-white"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
