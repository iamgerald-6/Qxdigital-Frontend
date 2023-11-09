import React from "react";
import Navbar from "../Components/Navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import CVMessagesComponent from "../Components/CVMessagesComponents";
import { NavLink } from 'react-router-dom';
import {SiGoogledocs} from 'react-icons/si';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiBriefcase} from 'react-icons/hi2';
import {RiMailAddFill} from "react-icons/ri";
import {GrAdd} from "react-icons/gr"

function CVMessages() {

  const buttonStyle =({isActive}) => {
    return{
        background: isActive ? 'linear-gradient(#f7682a,white)': '',
        borderColor : isActive ? 'black': '',
        textAlign: isActive ? 'center': ''
    }
}
  return (
    <div>
      <Navbar />
      <div className="grid lg:grid-cols-4 mt-5">
        {/*First section */}
        <div className="border shadow-md shadow-stone-400 lg:w-[26vw] rounded-e-[48px] h-[37vh] flex flex-col justify-center items-center gap-3 col-auto">
        <button className="w-[30vw] lg:w-[20vw] text-center shadow-md shadow-orange-400 rounded-2xl mt-4 py-2 border flex font-family justify-evenly border-black hover:bg-[#f7682a]">
            New Message<GrAdd className='lg:ms-12  mt-1' />
          </button>
          <button className="w-[30vw] lg:w-[20vw] text-center shadow-md shadow-orange-400 rounded-2xl mt-4 py-2 border flex font-family justify-evenly border-black hover:bg-[#f7682a]">
            Message Admin<RiMailAddFill className='lg:ms-12  mt-1' />
          </button>
        </div>

        {/*second section */}
        <div className=" bg-orange-50 border border-stone-800 h-[32vh] lg:w-[18vw] lg:ms-12 mt-7 shadow-md shadow-orange-200 relative rounded-xl flex-col items-center">
                    <h1 className='text-center text-xl font-family uppercase mt-5'>Inbox</h1>
                    <div className='flex justify-center   h-[14vh] items-end '>
                        <div class="w-52  rounded-full bg-orange-900">
                        <ProgressBar completed={25} bgColor="#f7682a" animateOnRender={true} />
                        </div>
                        <div className='absolute top-12 left-10'>
                            <span className='text-4xl font-family font-bold text-neutral-400'>5</span>
                        </div>
                    </div>
                    <h3 className='text-lg lg:text-start text-center font-family lg:ms-9 mt-1'>You've new messages</h3>
                </div>
        

                <div className=" border bg-orange-50 border-stone-800 h-[32vh] lg:ms-6 lg:w-[18vw] relative mt-7 shadow-md shadow-orange-200 rounded-xl">
                    <h1 className='text-center text-xl font-family uppercase mt-5'>Draft</h1>
                    <div className='flex justify-center   h-[14vh] items-end '>
                        <div class="w-52  rounded-full bg-orange-900">
                        <ProgressBar completed={15} bgColor="#f7682a" animateOnRender={true} />
                        </div>
                        <div className='absolute top-12 left-10'>
                            <span className='text-4xl font-family font-bold text-neutral-400'>12</span>
                        </div>
                    </div>
                    <h3 className='text-lg lg:text-start text-center font-family lg:ms-9 mt-1'>Open saved messages</h3>
                </div>
        
                <div className=" border bg-orange-50 border-stone-800 h-[32vh] lg:ms-0 mt-7 lg:w-[18vw] relative shadow-md shadow-orange-200 rounded-xl">
                    <h1 className='text-center text-xl font-family uppercase mt-5'>SENT</h1>
                    <div className='flex justify-center   h-[14vh] items-end '>
                        <div class="w-52  rounded-full bg-orange-900">
                        <ProgressBar completed={75} bgColor="#f7682a" animateOnRender={true} />
                        </div>
                        <div className='absolute top-12 left-10'>
                            <span className='text-4xl font-family font-bold text-neutral-400'>75</span>
                        </div>
                    </div>
                    <h3 className='text-lg lg:text-start text-center font-family lg:ms-9 mt-1'>View sent messages</h3>
                </div>
        

      </div> 
      
      
      {/* Third section */}
         {/*Sub Menus*/}
         <div className="lg:flex lg:flex-row flex-col">
          <div className="border mt-5 h-[44vh] flex justify-center flex-col items-center rounded-tr-[48px]  lg:w-[26vw] shadow-md shadow-slate-800">
         <NavLink to='/cvreviewstatus' style={buttonStyle} className='w-[30vw] lg:w-[24vw] shadow-md hover:bg-[#f7682a] shadow-orange-500 rounded-2xl mt-4 py-2 border uppercase flex font-family justify-evenly border-black'>cv review status<SiGoogledocs className=' mt-1' /></NavLink>
          <NavLink to='/cvmessages' style={buttonStyle} className='w-[30vw] lg:w-[24vw] shadow-md  shadow-orange-500 rounded-2xl mt-4 py-2 border uppercase flex font-family justify-evenly'>Messages<BsFillChatDotsFill className='lg:ms-12  mt-1' /></NavLink>
          <NavLink to='/trainingoffer' style={buttonStyle} className='w-[30vw] lg:w-[24vw] shadow-md hover:bg-[#f7682a] shadow-orange-500 rounded-2xl mt-4 py-2 border uppercase flex font-family justify-evenly border-black'>Training Offers<HiBriefcase className='  mt-1' /></NavLink>
        </div>
        <div className="">

        <hr className='lg:ms-9 ms-3 w-[92vw] shadow-md mt-3 border-2 lg:w-[63vw]'></hr>
        <div className='ms-9 lg:text-start text-center mt-1 text-xl font-bold font-family '></div><br />

          <div className="h-50 overflow-y-scroll ">
          <div className="bg-white flex justify-between rounded-2xl lg:ms-9 flex-col gap-4">
          <h1 className="bg-white shadow-md shadow-orange-500  h-[30px] w-[30%] hover:bg-[#f7682a] rounded-md text-center border border-black">Francis Adayemi</h1>
          <h1 className="bg-white shadow-md shadow-orange-500  h-[30px] w-[30%] hover:bg-[#f7682a] rounded-md text-center border border-black">UI/UX Designer</h1>
          <h1 className="bg-white shadow-md shadow-orange-500  h-[30px] w-[30%] hover:bg-[#f7682a] rounded-md text-center border border-black">Rizler agency</h1>
          <h1 className="bg-white shadow-md shadow-orange-500  h-[30px] w-[30%] hover:bg-[#f7682a] rounded-md text-center border border-black">Rizler agency</h1>
          <h1 className="bg-white shadow-md shadow-orange-500  h-[30px] w-[30%] hover:bg-[#f7682a] rounded-md text-center border border-black">Francis Adayemi</h1>
         </div>
         </div>
        </div>
        
        </div>
    </div>
  );
}

export default CVMessages;

