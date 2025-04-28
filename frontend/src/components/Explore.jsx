import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Explore() {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="flex justify-between items-center p-12 ">
        <div>
          <h1 className="text-[28px]">Explore our wide variety of categories</h1>
          <p className="text-gray-400 text-[12px] mt-1">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="flex items-center gap-4 py-4 px-4 bg-black border-gray-600 border-2 rounded-lg">
            {/* icons */}
            <FaArrowLeft className="p-2 bg-neutral-900 text-[32px] rounded-md" />
            <div>
                <span className="bg-red-600 px-6 rounded-2xl mx-1"></span>
                <span className="bg-neutral-900 px-6 rounded-2xl mx-1"></span>
                <span className="bg-neutral-900 px-6 rounded-2xl mx-1"></span>
                <span className="bg-neutral-900 px-6 rounded-2xl mx-1"></span>
            </div>
            <FaArrowRight className="p-2 bg-neutral-900 text-[32px] rounded-md"/>
        </div>
      </div>
      {/* cart */}
      <div className="my-4 mx-12">
        <div>Cart1</div>
      </div>
    </div>
  );
}

export default Explore;
 