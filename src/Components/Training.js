import React from 'react'
import { NavLink } from 'react-router-dom';
import {SiGoogledocs} from 'react-icons/si';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiBriefcase} from 'react-icons/hi2'
import { Dropdown } from './Dropdown';

export const Training = () => {

    const buttonStyle =({isActive}) => {
            return{
                background: isActive ? 'linear-gradient(orange,white)': '',
                borderColor : isActive ? 'black': '',
                textAlign: isActive ? 'center': ''
            }
    }

    // const [open,setOpen] =useState(false);
    // const handleChange =() =>{
    //     setOpen(!open)
    // }

  return (
    <>      
        <div>  
            <div className='grid lg:grid-cols-4 mt-5'>
                <div className='border shadow-md shadow-stone-400 lg:w-[33vw] rounded-e-[48px] h-[37vh]'>
                     <h2 className='text-center text-2xl mt-5 font-family uppercase'>Experience Level</h2>

                     <div className='flex justify-center h-[18vh] items-end  '>
                        <div className="w-72  rounded-full h-3 bg-orange-900">
                            <div class="bg-orange-500 h-3 rounded-full" style={{"width": "45%"}}></div>
                        </div>
                     </div>
                </div>


                <div className=' bg-orange-50 border border-stone-800 h-[32vh] lg:w-[18vw] lg:ms-36 mt-7 shadow-md shadow-orange-200 relative rounded-xl'>
                    <h1 className='text-center text-xl font-family uppercase mt-5'>Applied</h1>
                    <div className='flex justify-center   h-[14vh] items-end '>
                        <div class="w-52  rounded-full bg-orange-900">
                            <div class="bg-orange-500 text-xs font-medium text-black-100 text-end p-0.5 leading-none rounded-full" style={{"width": "25%"}}>25%</div>
                        </div>
                        <div className='absolute top-12 left-10'>
                            <span className='text-4xl font-family font-bold text-neutral-400'>5</span>
                        </div>
                    </div>
                    <h3 className='text-lg lg:text-start text-center font-family lg:ms-9 mt-1'>Acceptance Rate</h3>
                </div>


                <div className='border bg-orange-50 border-stone-800 h-[32vh] lg:ms-20 lg:w-[18vw] relative mt-7 shadow-md shadow-orange-200 rounded-xl'>
                    <h1 className='text-center text-xl uppercase font-family mt-5'>pending</h1>
                    <div className='flex justify-center   h-[14vh] items-end '>
                        <div class="w-52  rounded-full bg-orange-900">
                            <div class="bg-orange-500 text-xs font-medium text-black-100 text-end p-0.5 leading-none rounded-full" style={{"width": "15%"}}>15%</div>
                        </div>
                        <div className='absolute top-12 left-10'>
                            <span className='text-4xl font-family font-bold text-neutral-400'>12</span>
                        </div>
                    </div>
                    <h3 className='text-lg lg:text-start text-center font-family md:ms-9 mt-1'>Acceptance Rate</h3>
                </div>

                <div className='border bg-orange-50 border-stone-800 h-[32vh] lg:ms-5 mt-7 lg:w-[18vw] relative shadow-md shadow-orange-200 rounded-xl'>
                <h1 className='text-center text-xl uppercase mt-5 font-family'>declined</h1>
                    <div className='flex justify-center   h-[14vh] items-end '>
                        <div class="w-52  rounded-full bg-orange-900">
                            <div class="bg-orange-500 text-xs font-medium text-black-100 text-end p-0.5 leading-none rounded-full" style={{"width": "79%"}}>79%</div>
                        </div>
                        <div className='absolute top-12 left-10'>
                            <span className='text-4xl font-family font-bold text-neutral-400'>75</span>
                        </div>
                    </div>
                    <h3 className='text-lg lg:text-start text-center  font-family lg:ms-9 mt-1'>Declination Rate</h3>
                </div>
            </div>


            <div className='lg:flex lg:flex-row flex-col'>
                <div className='border mt-5 h-[44vh] flex justify-center flex-col items-center rounded-tr-[48px]  lg:w-[68vw] shadow-md shadow-slate-800'>
                    <button className='w-[40vw] lg:w-[27vw] shadow-md shadow-orange-300 py-2 border uppercase hover:bg-orange-50 transition ease-out duration-300 flex font-family justify-evenly'>Cv Review Status <SiGoogledocs className=' mt-1' /></button>
                    <button  className='w-[40vw] lg:w-[27vw] text-center shadow-md shadow-orange-300 mt-4 py-2 border uppercase hover:bg-orange-50 transition ease-out font-family duration-300 flex justify-evenly'>Messages <BsFillChatDotsFill className='lg:ms-12  mt-1'/></button>
                    <NavLink to='/trainingoffer' style={buttonStyle} className='w-[40vw] lg:w-[27vw] shadow-md shadow-orange-300  mt-4 py-2 border uppercase flex font-family justify-evenly'>Training Offers<HiBriefcase className='  mt-1' /></NavLink>
                </div>
                <div className=''>

                    <hr className='lg:ms-9 ms-3 w-[92vw] shadow-md mt-3 border-2 lg:w-[63vw]'></hr>
                    <h4 className='ms-9 lg:text-start text-center mt-1 text-xl font-bold font-family '>Recommended for you</h4>

                    <div className='h-60 overflow-y-scroll'>
                        <div className='flex justify-between'>
                            {/* <div className=' lg:w-[15vw] py-2 border ms-10 mt-5'>
                                <h1 className='text-center text-md flex justify-between  '><div className='bg-black rounded-full'></div>UI/UX Designer <RiArrowDropDownFill onClick={handleChange} className={`cursor-pointer mt-1 ${open ? 'rotate-180' :''}`}/></h1>
                                <p className={`${ open ? 'block' : 'hidden'} text-center text-xs `}>Laurel<br/>6 months intensive training<br/>location:Madrid<br/>Community of Madrid Spain</p>
                            </div> */}
                            <Dropdown  name={`Laurel\n6 months intensive training location:Madrid\nCommunity of Madrid Spain`}/>
                            <div className=' flex items-center me-14 px-5 '>
                                <button className='border shadow-md px-6 shadow-orange-200 rounded-lg me-5 font-family hover:bg-orange-50 transition ease-out duration-300'>Accept</button>
                                <button className='border shadow-md px-6 shadow-orange-200 rounded-lg font-family hover:bg-orange-50 transition ease-out duration-300'>Decline</button>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            {/* <div className=' lg:w-[15vw] py-2 border ms-10 mt-5'>
                                <h1 className='text-center text-md flex justify-between '><div className='bg-black rounded-full'></div>UI/UX Designer <RiArrowDropDownFill onClick={handleChange}  className={`cursor-pointer mt-1 ${open ? 'rotate-180' :''}`}/></h1>
                                <p className={`${ open ? 'block' : 'hidden'} text-center text-xs `}>2 months remote training 6 months <br/>location:Kumasi,Kwadaso</p>
                            </div> */}
                            <Dropdown name={`2 months remote training 6 months\nlocation:\nKumasi,Kwadaso`}/>
                            <div className=' flex items-center me-14 px-5 '>
                                    <button className='border shadow-md px-6 shadow-orange-200 rounded-lg me-5 font-family hover:bg-orange-50 transition ease-out duration-300'>Accept</button>
                                    <button className='border shadow-md px-6 shadow-orange-200 rounded-lg font-family hover:bg-orange-50 transition ease-out duration-300'>Decline</button>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            {/* <div className='lg:w-[15vw] py-2 border ms-10 mt-5'>
                                <h1 className='text-center text-md flex justify-between '><div className='bg-black rounded-full'></div>UI/UX Designer <RiArrowDropDownFill onClick={handleChange} className={`cursor-pointer mt-1 ${open ? 'rotate-180' :''}`}/></h1>
                                <p className={`${ open ? 'block' : 'hidden'} text-center text-xs `}>2 months remote training 6 months <br/>location:Accra,Airport</p>
                            </div> */}
                            <Dropdown name={`2 months remote training 6 months\nlocation:Accra,Airport`}/>
                            <div className=' flex items-center me-14 px-5 '>
                                    <button className='border shadow-md px-6 shadow-orange-200 rounded-lg me-5 font-family hover:bg-orange-50 transition ease-out duration-300'>Accept</button>
                                    <button className='border shadow-md px-6 shadow-orange-200 rounded-lg font-family hover:bg-orange-50 transition ease-out duration-300'>Decline</button>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

        </div> 
    
    </>
  )
}
