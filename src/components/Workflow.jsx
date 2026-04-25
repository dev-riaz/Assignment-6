import React from "react";

const Workflow = () => {
  return (
    <div>
      <div className="">
        <div className="hero bg-linear-to-r from-[#6a12edf6] to-[#9514FA] py-20">
          <div className=" text-center text-white">
            <div className="">
              <h1 className="text-4xl font-bold">
                Ready to Transform Your Workflow?
              </h1>
              <p className="py-6">
                Join thousands of professionals who are already using Digitools
                to work smarter. <br /> Start your free trial today.
              </p>
              <div className="space-x-3">
                <button className="btn bg-white text-[#9514FA] rounded-full">
                  Explore Products
                </button>
                <button className="btn btn-outline rounded-full px-8">
                  View Pricing
                </button>
              </div>
              <p className="mt-4">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
