import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Intro = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-6 py-12 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* Profile Image - Square */}
      <img
        src={`${process.env.PUBLIC_URL}/1711239474668.jpeg`}
        alt="Milad Mehri"
        className="w-32 h-32 rounded-lg border-4 border-gray-300 dark:border-gray-600 shadow-lg sm:mr-8 mb-4 sm:mb-0"
      />

      {/* Intro Text */}
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold mb-1">Milad Mehri</h1>
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400">
          CS @{" "}
          <a
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
            href="https://www.cs.ubc.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UBC
          </a>
        </h2>

        {/* Social Links */}
        <div className="mt-3 flex justify-center sm:justify-start space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/MiladMehriResume.pdf"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <IoDocumentText size={22} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/milad-mehri"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/milad-mehri-838664216/"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <IoLogoLinkedin size={22} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:memm.milad@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-400"
          >
            <IoMdMail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
