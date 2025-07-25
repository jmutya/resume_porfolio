import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-600 mb-8">
          Interested in working together or just want to connect? Reach out via any of the
          platforms below.
        </p>

        <div className="space-y-4 text-gray-700 text-md">
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:your.email@example.com" className="hover:underline">
              jeffersonmutya1@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span>09602602134</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>Davao City, Philippines</span>
          </div>
        </div>

        <div className="flex gap-6 justify-center mt-10 text-2xl text-gray-700">
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
