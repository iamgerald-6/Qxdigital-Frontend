import React, { useState } from "react";
import { Link } from "react-router-dom";

function forgotpassword() {


  return (
    <div className="flex flex-col sm:flex-row mx-[20px] justify-center align-center">
      <div className="flex justify-center flex-col items-center bg-[#111111] text-[#f7682a] px-12 h-[12rem] sm:h-[31rem] rounded-tl-md rounded-bl-md text-center sm:text-left shadow-xl">
        <p className="text-6xl md:text-[7.3rem] font-extrabold logo">
          Q{" "}
          <span className="bg-[#f7682a] text-[#000] rounded-md ml-[20px] sm:ml-0 px-2">
            X
          </span>
        </p>
        <p className="text-4xl md:text-7xl text-center font-extrabold mt-4  sm:">
          Digitall
        </p>
      </div>

      <form
        className="bg-white px-4 py-4 pb-[20px] rounded-tr-md rounded-br-md shadow-xl"
      >
        
        <h1>Forgot password page</h1>

        
      </form>
    </div>
  );
}

export default forgotpassword;
