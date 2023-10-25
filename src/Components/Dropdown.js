import React, { useState } from 'react';
import {RiArrowDropDownFill} from 'react-icons/ri';

export const Dropdown = (props) => {

    const [open,setOpen] =useState(false);
    const handleChange =() =>{
        setOpen(!open)
    }

    
  return (
    <>
             <div className='flex justify-between'>
                            <div className=' lg:w-[15vw] py-2  border rounded-xl border-black shadow-md ms-10 mt-5'>
                                <h1 className='text-center text-md flex justify-between font-family '><div className='bg-black rounded-full'></div>UI/UX Designer <RiArrowDropDownFill onClick={handleChange} className={`cursor-pointer mt-1 ${open ? 'rotate-180' :''}`}/></h1>
                                <p className={`${ open ? 'block' : 'hidden'} font-family text-center text-xs whitespace-pre-line`} style={{whiteSpace: 'pre-line'}}>{props.name}</p>
                            </div>
                           
            </div>
    
    </>
  )
}
