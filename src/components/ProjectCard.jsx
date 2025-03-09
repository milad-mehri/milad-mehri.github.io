import React, { useState } from "react";
import { FaGithub, FaExternalLinkSquareAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ProjectCard = ({ project, isOpen, setOpenProject }) => {
  const isExpanded = isOpen === project.name;

  return (
    <div
      className={`transition-all duration-300 ease-in-out cursor-pointer 
      hover:bg-gray-300 dark:hover:bg-opacity-5 
      ${isExpanded ? "p-4" : "p-3"} 
      text-base w-full max-w-screen-md text-left text-black dark:text-white rounded-lg mb-2`}
      onClick={() => setOpenProject(isExpanded ? null : project.name)}
    >
      <div className="flex items-center justify-between w-full transition-all duration-300 ease-in-out">
        {/* Project Image */}
        <img
          src={project.image || `${process.env.PUBLIC_URL}/placeholder.png`}
          alt={`${project.name} by Milad Mehri`}
          className={`hidden sm:block rounded-lg object-cover transition-all duration-300 ease-in-out 
          ${isExpanded ? "w-32 h-32 mr-6" : "w-14 h-14 mr-6"}`}
        />

        {/* Project Info */}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <b className="text-lg">{project.name}</b>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                {project.tech}
              </p>
            </div>

            {/* Icons (Moved Closer) */}
            <div className="flex items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
                className="p-1 hover:text-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={18} />
              </a>
              {project.link && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="p-1 hover:text-gray-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkSquareAlt size={18} />
                </a>
              )}
              <button
                className="p-1 hover:text-gray-600 transition-all duration-300 ease-in-out"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenProject(isExpanded ? null : project.name);
                }}
              >
                {isExpanded ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
              </button>
            </div>
          </div>

          {/* Expandable Section with Smooth Transition */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="list-disc pl-5 text-sm">
              {project.bulletPoints.map((point, idx) => (
                <li className="self-start" key={idx}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
