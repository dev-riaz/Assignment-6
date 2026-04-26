import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const ProductCard = ({ card, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);
    setCarts([...carts, card]);
    // toast.success("added");
    toast.success("Add to cart Successful!", {
      theme: "colored",
    });
  };

  return (
    <div>
      <div key={card.id} className="card bg-base-100 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg ">
        <div className="card-body">
          <div className="flex justify-between">
            <span>
              <img className="w-15 rounded-full" src={card.icon} alt="icon" />
            </span>
            <span
              className={`badge badge-xs ${card.tag === "best seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : card.tag === "popular" ? "bg-[#E1E7FF] text-[#4F39F6]" : card.tag === "new" ? "bg-[#DBFCE7] text-[#0A883E]" : ""} font-bold py-2 px-3`}
            >
              {card.tag}
            </span>
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{card.name}</h2>
            <p className="line-clamp-2 text-gray-500">{card.description}</p>
            <span className="">
              <span className="font-bold text-xl">${card.price}</span>/
              {card.period}
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-bold text-gray-400">
                {card.features[0]}
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-bold text-gray-400">
                {card.features[1]}
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-bold text-gray-400">
                {card.features[2]}
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              onClick={handleBuy}
              disabled={isBuy}
              className="btn bg-linear-to-r from-[#6a12edf6] to-[#9514FA] rounded-full text-white btn-block"
            >
             <FiShoppingCart></FiShoppingCart> {isBuy ? "Added" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
