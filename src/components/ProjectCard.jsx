import React, { useState } from "react";
import { FaGithub, FaExternalLinkSquareAlt, FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";

const ProjectCard = ({ project, isOpen, setOpenProject }) => {
  const isExpanded = isOpen === project.name;

  return (
    <div
      className={`transition-all duration-300 ease-in-out cursor-pointer 
      hover:bg-gray-300 dark:hover:bg-opacity-5 
      relative
      ${
        isExpanded
          ? "p-4 bg-gray-300 bg-opacity-5 shadow-lg"
          : "p-3 shadow-md"
      } 
      text-base w-full max-w-screen-md text-left text-black dark:text-white rounded-lg mb-2 group`}
      onClick={() => setOpenProject(isExpanded ? null : project.name)}
    >

      <div className="flex items-start justify-between w-full transition-all duration-300 ease-in-out">
        {/* Project Image */}
        <div className="shrink-0 mr-4 sm:mr-6">
          <img
            src={project.image || `${process.env.PUBLIC_URL}/placeholder.png`}
            alt={`${project.name} by Milad Mehri`}
            className={`rounded-lg object-cover transition-all duration-300 ease-in-out
            ${isExpanded ? "w-20 h-20 sm:w-32 sm:h-32" : "w-12 h-12 sm:w-14 sm:h-14"}`}
          />
        </div>

        {/* Project Info */}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <div className="flex items-center flex-wrap gap-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:underline-offset-2 hover:decoration-1 text-lg font-bold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.name}
                  </a>
                ) : (
                  <b className="text-lg">{project.name}</b>
                )}
                {project.badges?.map((badge, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${badge.color}20`, color: badge.color, border: `1px solid ${badge.color}40` }}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                {project.tech}
              </p>
            </div>

            {/* Icons */}
            <div className="flex items-center">
              {project.isFavorite && (
                <FaStar 
                  className="text-yellow-500/70 drop-shadow-sm animate-spin-slow mr-1" 
                  size={18}
                />
              )}
              {project.github && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github}
                  className="p-1 hover:text-gray-600"
                  onClick={(e) => e.stopPropagation()}
                  title="View on GitHub"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {project.link && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="p-1 hover:text-gray-600"
                  onClick={(e) => e.stopPropagation()}
                  title="View Live Project"
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
