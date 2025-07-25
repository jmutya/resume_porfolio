import React from "react";
import soloImage from "../../assets/solo2.jpg";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans text-gray-800">
      {/* Left - Profile Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-white p-8 border-b md:border-b-0 md:border-r border-gray-200">
        <img
          src={soloImage}
          alt="Jefferson A. Mutya"
          className="w-120 h-120 object-cover rounded-full border-4 border-blue-500 shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold text-center">Jefferson A. Mutya</h1>
        <p className="text-lg text-blue-600 mt-1">Programmer</p>
        <button className="mt-4 px-5 py-2 border border-black rounded hover:bg-black hover:text-white transition">
          EMAIL ME
        </button>
      </div>

      {/* Right - About & Links Section */}
      <div className="md:w-1/2 w-full bg-gray-50 p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <hr className="border-gray-400 mb-4 w-16" />
        <p className="text-base mb-6 max-w-lg leading-relaxed">
          I am a highly adaptable and results-driven IT professional with
          hands-on experience in full-stack development, network operations, and
          virtual assistance. I showcased my skills as a full-stack programmer
          during our capstone research, worked as a part-time virtual assistant,
          and completed my on-the-job training at Globe Telecom, Inc. as a
          Network Operations Specialist. I'm committed to delivering innovative
          solutions and thrive in fast-paced, dynamic work environments
        </p>

        {/* Resume and Portfolio Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-200 transition">
            Resume
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-200 transition">
            Portfolio
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-xl text-gray-700">
          <FaInstagram className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-600 cursor-pointer" />
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Home;
