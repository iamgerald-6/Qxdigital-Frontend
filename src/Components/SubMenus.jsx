import React from "react";
import { Link } from "react-router-dom";

function SubMenus() {
  return (
    <div className="bg-[#f7682a] shadow-xl h-[100%] col-auto p-6 rounded-md">
      {/* CV REVIEW BUTTON */}
      <Link to="/CVReviewStatus">
        <button className="w-[100%] h-[25%] bg-[#1c1c21] text-white shadow-xl mt-4 rounded-md font-semibold duration-[0.5s] hover:bg-[#f7682a] ">
          CV REVIEW STATUS <span></span>
        </button>
      </Link>

      {/* CV MESSAGES BUTTON */}
      <Link to="/CVMessages">
        <button className="w-[100%] h-[25%] bg-[#1c1c21] text-white mt-4 rounded-md font-semibold duration-[0.5s] hover:bg-[#f7682a] ">
          MESSAGES
          <span></span>
        </button>
      </Link>

      {/* TRAINING OFFERS BUTTON */}
      <Link to="">
        <button className="w-[100%] h-[25%] bg-[#1c1c21] text-white mt-4 rounded-md font-semibold duration-[0.5s] hover:bg-[#f7682a]">
          TRAINING OFFERS <span></span>
        </button>
      </Link>
    </div>
  );
}

export default SubMenus;
