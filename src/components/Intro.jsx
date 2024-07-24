import React from "react";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Intro = () => {
  return (
    <div className=" flex items-center justify-center p-10 bg-gray-400 text-white dark:bg-gray-800">
      <img
        src={`${process.env.PUBLIC_URL}/1711239474668.jpeg`}
        alt="Milad Mehri"
        className="rounded-full w-32 h-32 border-4 border-white shadow-lg mr-16"
      />
      <div className="text-center">
        <h1 className="text-3xl  font-bold mb-2">Milad Mehri</h1>
        <h2 className="text-xl font-medium">
           CS @{" "}
          <a
            className="font-bold hover:underline"
            href="https://www.cs.ubc.ca/"
            target="_blank"
          >
            UBC
          </a>
        </h2>
        <h2>SWE Fellow @ Headstarter AI</h2>
        {/* <h2 className="text-xl font-medium">Computer Science Student</h2> */}

        <div className="mt-3 flex text-white cente justify-center">
          <a
            target="_blank"
            href="/MiladMehriResume.pdf"
            className="p-1 text-white hover:text-gray-200"
          >
            <IoDocumentText size={20} />
          </a>

          <a
            target="_blank"
            href="https://github.com/milad-mehri"
            className="p-1 text-white hover:text-gray-200"
          >
            <FaGithub size={20} />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/milad-mehri-838664216/"
            className="p-1 text-white hover:text-gray-200"
          >
            <IoLogoLinkedin size={20} />
          </a>

          <a
            target="_blank"
            href="mailto:memm.milad@gmail.com"
            className="p-1 text-white hover:text-gray-200"
          >
            <IoMdMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
