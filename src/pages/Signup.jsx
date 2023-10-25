import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { BsApple, BsFacebook } from "react-icons/bs";

function Signup() {
  
    /*Added the navigate so that the formdata can be passed to the NavBar Component*/
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

      /*navigation*/ 
    navigate("/CVReviewStatus", { state: formData });
    {
      /*navigation*/
    }
    navigate("/CVReviewStatus");
    console.log(formData);
  };

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
        className="bg-white px-4 py-4 pb-[10px] rounded-tr-md rounded-br-md shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-900">
          Sign up for an account
        </h2>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              type="text"
              required
              placeholder="First name"
              name="firstname"
              className="my-3 block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-[#080101] focus:z-10 sm:text-sm"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Last name"
              name="lastname"
              className="my-3 block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-[#080101] focus:z-10 sm:text-sm"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Email address"
              name="email"
              className="my-3 block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-[#080101] focus:z-10 sm:text-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              className="my-3 block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:border-[#080101] focus:z-10 sm:text-sm"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 h-3 w-3"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="text-gray-900 text-xs my-[20px]">
              I agree to the Terms of Service and Privacy Policy
            </span>
          </label>
          <button
            type="submit"
            className="mt-4 mb-[10px] w-full flex justify-center py-2 px-4 border border-gray-500 text-sm font-medium rounded-md text-white bg-black hover:text-black hover:bg-transparent  focus:outline-none focus:ring-2 transition duration-500 ease-in-out"
          >
            Sign Up
          </button>
          <Link to="/login" className="text-xs text-gray-900 ">
            Already have an account?{" "}
            <span className="font-semibold text-orange-500 hover:underline transition duration-800 ease">
              sign in
            </span>
          </Link>
        </div>

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

          {/* Social SignUp icons */}
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
}

export default Signup;
