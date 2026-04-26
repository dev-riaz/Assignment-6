import React from "react";
import NavCartIcon from "./NavCartIcon";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = ({ carts }) => {
  // console.log(carts);

  return (
    <>
      <div className="bg-base-100 shadow sticky top-0 z-50">
        <div className="navbar w-full md:max-w-11/12 mx-auto">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" md:h-4 w-4 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-42 p-2 shadow"
              >
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <a className="text-xl md:text-3xl font-bold bg-linear-to-r from-[#6a12edf6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2 md:gap-3">
            <ul className="flex justify-between items-center gap-2 md:gap-4">
              <li className="absolute">
                <div className="w-4 h-4 flex items-center justify-center bg-lime-300 rounded-full font-bold relative -left-4 text-[12px] text-red-600">{carts.length}</div>
                <FaCartArrowDown className="relative bottom-2 -left-7"></FaCartArrowDown>
              </li>
              <li className="font-bold">Login</li>
            </ul>
            <a className="btn  rounded-full text-white bg-linear-to-r from-[#6a12edf6] to-[#9514FA]">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
