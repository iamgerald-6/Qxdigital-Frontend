import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { RiArrowDropDownFill } from "react-icons/ri";
import Profile from '../assets/profile.svg';

function Navbar() {
  const location = useLocation();
  const formData = location.state;

  const [drop ,setDrop] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrop = () => {
    setDrop(!drop)
  }
  const handleChange =() => {
      setOpen(!open)
  }

  return (
    <div>
      <nav className="md:px-14 flex border w-[100vw] h-[12vh] text-xl  shadow-md items-center justify-between gap-[1.5em] font-semibold relative">
        <div className="flex justify-between">
            <img  className="cursor-pointer" src={logo} alt="app logo" height={"auto"} width={"50px"} />
            <Link to="#" className="mt-3 ml-3 font-family hidden md:block ">Home</Link>
            
        </div>
        {/* Responsive menu */}
        <ul className={`${open ? 'block' : 'hidden'} md:hidden absolute top-20 right-1 bg-white w-[100vw] shadow-md py-2`}>
                <li className='ms-3 pb-2 font-family border-b  hover:bg-gray-100'><Link to='#'>Profile</Link></li>
                <li className='ms-3 pb-2 font-family border-b  hover:bg-gray-100'><Link to='#'>Privacy</Link></li>
                <li className='ms-3 pb-2 font-family border-b  hover:bg-gray-100'><Link to='#'>Home</Link></li>
                <li className='ms-3 pb-2 font-family border-b  hover:bg-gray-100'><Link to='#'>Notifications</Link></li>
                <li className='ms-3 pb-2 font-family hover:bg-gray-100'><Link to='#'>Sign Out</Link></li>
            
        </ul>
        
        <ul className='block gap-7 relative md:flex'>
          <li className='hidden md:flex font-family'><Link to="/Notifications">Notifications</Link></li>

          {/*profile*/}
          <li   className="flex items-center justify-center gap-[0.4em]">
            <p className="font-bold md:block hidden font-family">
            {formData ? `${formData.firstname} ${formData.lastname}` : 'No Data'}
            </p>
            <h5 className='font-bold md:hidden font-family'>
              {formData ? `${formData.firstname.charAt(0)} ${formData.lastname.charAt(0)}` : 'No Data'}
            </h5>
            <div ><img onClick={handleChange} className='cursor-pointer' src={Profile} alt='Profile' /></div>
            <div className='md:block hidden'><RiArrowDropDownFill onClick={handleDrop}  className={`cursor-pointer h-7 w-7 ${drop ? 'rotate-180': ''}`} /></div>
            <ul className={` ${drop ? 'md:block' : 'md:hidden'} hidden md:block text-center absolute  top-7 left-48 h-32 mt-3 w-40 bg-gray-100 border-2 border-black shadow-md shadow-orange-500`}>
              <li className='pt-2 pb-1 hover:bg-gray-300 border-b-2 border-black font-family'><Link className=''>Edit profile</Link></li>
              <li className='pt-2 pb-1 hover:bg-gray-300 border-b-2 border-black font-family'><Link>Privacy</Link></li>
              <li className='pt-2 pb-1 hover:bg-gray-300 font-family'><Link>Sign Out</Link></li>
            </ul>
            
          </li>
          
        </ul>
        
      </nav>
    </div>
  );
}

export default Navbar;
