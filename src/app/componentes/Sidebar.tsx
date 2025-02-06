import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="fixed left-6 bottom-0 flex flex-col items-center space-y-4">
        <a href="https://github.com/beamoraess" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/beatriz-m-silva" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="mailto:beamoraes.work@gmail.com" className="text-white hover:text-gray-400 transition">
          <FaEnvelope className="text-2xl" />
        </a>
        <div className="w-[1px] h-24 bg-gray-400 mt-4"></div>
      </div>
    </>
  );
};

export default Sidebar;