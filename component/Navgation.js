import React from "react";

const Navgation = () => {
  return (
    <div className="py-2 px-6 sm:px-2 max-w-7xl m-auto">
      <div className="flex items-center justify-between my-2">
        <div>
          <span className="text-xl font-extrabold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
            IgReel.com
          </span>
        </div>
        <div className="flex items-center cursor-pointer">
          <span className="mx-2 pb-0.5">English</span>
          <img
            className="inline"
            src="/assets/light-mode-ig.png"
            alt="light-mode-ig"
            width="20"
          />
        </div>
      </div>
    </div>
  );
};

export default Navgation;
