import React from "react";
import Navbar from "../Components/Navbar";

function CVMessages() {
  return (
    <div className="h-[100vh] w-[100vw] ">
      <Navbar />
      <div className="h-[25vh] w-[40vh] bg-red-600 rounded-tr-3xl rounded-br-3xl flex flex-col justify-center items-center gap-4">
        <button className="bg-white h-[50px] w-[80%] rounded-2xl">
          New Message
        </button>
        <button className="bg-white h-[50px] w-[80%] rounded-2xl">
          Message Admin
        </button>
      </div>
    </div>
  );
}

export default CVMessages;
