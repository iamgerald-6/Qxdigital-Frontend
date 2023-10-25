import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { BsApple, BsFacebook } from "react-icons/bs";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

const Login = () => {
  // State to manage form data and checkbox status
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password" && !showPassword){
      setShowPassword(!showPassword);
    }
  };
  const handleTogglePassword =()=>{
    setShowPassword(!showPassword)
  }
  
  // Handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className="flex flex-col h-[rem] sm:flex-row mx-[20px] justify-center align-center ">
      {/* Left side - Logo and company name */}
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

      {/* Right side - Login form */}
      <form className="bg-white px-4 py-4 pb-[20px] rounded-tr-md rounded-br-md shadow-xl">
        <h2 className="mt-[3rem] mb-9 text-left text-3xl font-semibold text-gray-900 ">
          Sign in
        </h2>

        <div className="rounded-md shadow-sm -space-y-px mb-7">
          {/* Email input */}
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              name="email"
              autoComplete="email"
              required
              className="my-4 block w-[17.4rem] px-4 py-2.5 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-[#080101] focus:z-10 sm:text-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password input */}
          <div className="mt-2">
            <div className="relative">
            <input
            id="password"
            type={showPassword? "password":"text"}
            placeholder="Password"
            name="password"
            autoComplete="current-password"
            required
            className="my-0 block w-full px-4 py-2.5 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-[#080101] focus:z-10 sm:text-sm"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password && (
          <button
            type="button" 
            onClick={handleTogglePassword}
            className="absolute z-10 ml-[15.3rem] top-3.5 cursor-pointer"
            >
            {showPassword ? <AiFillEyeInvisible className="text-gray-400"/>:<AiFillEye className="text-gray-500"/>}
          </button>)
          }
            </div>
          </div>

          {/* Checkbox for "Keep me signed in" */}
          <label className="flex items-center justify-between">
            <div className="mb-5 flex items-center space-x-1">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 h-3 w-3 cursor-pointer"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="text-gray-900 text-xs my-[20px]">
                Keep me signed in
              </span>
            </div>
            <Link
              to="/forgotpassword"
              className="text-xs mb-5 font-semibold text-gray-900 hover:text-orange-500 transition duration-500 ease-in-out"
            >
              Forgot password?
            </Link>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-4 mb-[12px] w-full flex justify-center py-3 px-4 border border-gray-500 text-sm font-medium rounded-md text-white bg-black hover:text-black hover:bg-transparent  focus:outline-none focus:ring-2 transition duration-500 ease-in-out"
          >
            Sign in
          </button>

          {/* Link to sign up */}
          <span className="text-xs text-gray-900 cursor-pointer">
            <Link
            to="/"
            className="font-semibold"
            >
            Don't have an account?{" "}
             <span className=" text-orange-500  hover:underline transition duration-800 ease">sign up</span> 
            </Link>
          </span>
        </div>

        {/* Social login section */}
        <div>
          <div className="mt-[20px] text-xs mb-[10px] flex justify-center">
            <span>
              <hr className="border-t-2 border-gray-400 w-[80px] mt-[12px]" />
            </span>
            <span className="mx-[5px]">or continue with </span>
            <span>
              <hr className="border-t-2 border-gray-400  w-[80px] mt-[12px]" />
            </span>
          </div>

          {/* Social login icons */}
          <div className="mt-4 flex gap-[30px] justify-center">
            <FcGoogle
              size={38}
              className="border border-gray-500 cursor-pointer rounded-md p-2 transition duration-300 ease-in-out hover:bg-black hover:grayscale"
            />
            <RiTwitterXFill
              size={38}
              className="border border-gray-500 cursor-pointer rounded-md p-2 transition duration-300 ease-in-out hover:bg-black hover:text-white"
            />
            <BsApple
              size={38}
              className="border border-gray-500 cursor-pointer rounded-md p-2 transition duration-300 ease-in-out hover:bg-black hover:text-white"
            />
            <BsFacebook
              size={38}
              className="border border-gray-500 rounded-md p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
