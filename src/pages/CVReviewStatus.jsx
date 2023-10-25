import React from "react";
import Navbar from "../Components/Navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import {Link} from 'react-router-dom'
import { useState } from "react";
import SubMenus from "../Components/SubMenus";

function CVReviewStatus() {
  const CVStatus = {
    NumberQualified: 5,
    NumberInReview: 2,
    NumberNotQualified: 7,
  };
  
  

  const [CVFile, setCVFile] = useState();
  const [CV, setCV] = useState();

  async function changeHandler(e) {
    const res = await fetch(setCVFile(e.target.value));
    setCV(res.text());
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log(CV);
  }

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center">
      <Navbar />
      <div className="grid gap-4 w-[100%] h-[88vh] grid-cols-3 grid-rows-2 text-xl py-10 px-12">
        {/*Experience Level*/}
        <div className="bg-[#f7682a] shadow-xl h-[100%] col-auto p-6 flex flex-col justify-center w-[100%] rounded-xl">
          <p className="font-bold ">Experience Level</p>
          <br />
          <ProgressBar completed={80} bgColor="black" animateOnRender={true} />
          <br />
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            laboriosam at laudantium illum necessitatibus similique voluptatibus
            expedita qui veniam consequuntur. Nulla totam et accusantium tenetur
            eveniet debitis quam, itaque quia enim sequi
          </small>
        </div>

        <div className="bg-[#303030] shadow-xl h-[100%] col-span-2 p-6 rounded-xl flex gap-4 justify-center">
          {/*Qualified*/}
          <div className="bg-[#1c1c21] shadow-xl text-white h-[100%] p-6 flex flex-col justify-center items-center  w-[33%] rounded-xl">
            <p className="font-bold ">Qualified</p>
            <br />
            <h1 className="text-5xl font-bold">{CVStatus.NumberQualified}</h1>
            <br />
            <small className="text-center">
              CV meets the qualification criteria for a job
            </small>
          </div>

          {/*In Review*/}
          <div className="bg-[#1c1c21] shadow-xl text-white h-[100%] p-6 flex flex-col justify-center items-center  w-[33%] rounded-xl">
            <p className="font-bold ">In Review</p>
            <br />
            <h1 className="text-5xl font-bold">{CVStatus.NumberInReview}</h1>
            <br />
            <small className="text-center">
              CV is currently being evaluated by admins
            </small>
          </div>

          {/*Not Qualified*/}
          <div className="bg-[#1c1c21] shadow-xl text-white h-[100%] p-6 flex flex-col justify-center items-center  w-[33%] rounded-xl">
            <p className="font-bold ">Not Qualified</p>
            <br />
            <h1 className="text-5xl font-bold">
              {CVStatus.NumberNotQualified}
            </h1>
            <br />
            <small className="text-center">
              CV is currently being evaluated by admins
            </small>
          </div>
        </div>

        {/*Sub Menus*/}
        <div className="bg-[#f7682a] shadow-xl h-[100%] col-auto p-6 rounded-md">
          <button className="w-[100%] h-[25%] bg-[#1c1c21] text-white shadow-xl mt-4 rounded-md font-semibold duration-[0.5s] hover:bg-[#f7682a] ">
            CV REVIEW STATUS <span></span>
          </button>
          <button className="w-[100%] h-[25%] bg-[#1c1c21] text-white mt-4 rounded-md font-semibold duration-[0.5s] hover:bg-[#f7682a] ">
            MESSAGES
            <span></span>
          </button>
          <button  className="w-[100%] h-[25%] bg-[#1c1c21] text-white mt-4 rounded-md font-semibold duration-[0.5s] hover:bg-[#f7682a]"><Link to='/trainingoffer'>
            TRAINING OFFERS </Link><span></span>
          </button>
        </div>

        {/*Update CV Section*/}
        <div className="bg-[#1c1c21] h-[100%] col-span-2 rounded-md  p-6 flex flex-col items-center justify-center">
          <form
            className="w-[90%] h-[70%] outline-none active:outline-none rounded-xl flex flex-col justify-center items-center gap-10"
            onSubmit={submitHandler}
          >
            <input
              className="text-white"
              type="file"
              name="CVFile"
              value={CVFile}
              onChange={changeHandler}
            />
            <button
              type="submit"
              className="py-3 px-5 text-center w-[100%] bg-black rounded-md text-white font-bold text-xl hover:bg-white hover:text-black duration-1000"
            >
              Update CV <span></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CVReviewStatus;
