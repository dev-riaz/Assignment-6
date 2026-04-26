import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content py-10">
        <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-5 text-gray-400">
          <div className="w-40 space-y-3">
            <h3 className="text-2xl text-white font-bold">DigiTools</h3>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-col ml-10 space-y-3">
            <h5 className="text-white font-bold">Product</h5>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-white font-bold">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-white font-bold">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-white font-bold">Social Links</h6>
            <div className="flex justify-center gap-4">
              <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
                <a className="link link-hover text-black">
                  <FaInstagramSquare></FaInstagramSquare>
                </a>
              </div>
              <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
                <a className="link link-hover text-black">
                  <FaFacebook></FaFacebook>
                </a>
              </div>
              <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
                <a className="link link-hover text-black">
                  <FaXTwitter></FaXTwitter>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="text-gray-500" />
      <footer className="footer sm:footer-horizontal  bg-neutral text-neutral-content py-4">
        <aside className="w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 text-gray-500">
          <p>
            © 2026 DigiTools. All rights reserved. {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-8">
            <p>Privacy Policy</p>
            <p>Terms of Service </p>
            <p> Cookies</p>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
