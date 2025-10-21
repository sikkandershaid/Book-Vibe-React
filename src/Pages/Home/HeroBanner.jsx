// HeroBanner.jsx
import React from "react";

export default function HeroBanner() {
  return (
    <section className="bg-[#F3F3F3] rounded-3xl flex flex-col md:flex-row items-center justify-between py-[80px] px-[120px]">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-[56px] font-bold text-gray-black leading-snug" style={{fontFamily: '"Playfair Display", serif'}}>
          Books to freshen up <br /> your bookshelf
        </h1>

        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200">
          View The List
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 md:ml-12 flex-shrink-0">
        <img
          src="/image/pngwing 1.png"
          alt="The Dating Playbook for Men"
          className="w-48 md:w-64 drop-shadow-md"
        />
      </div>
    </section>
  );
}
