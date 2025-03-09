import React from "react";
import { FaExternalLinkSquareAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExperienceCard = ({ experience, isOpen, setOpenExperience }) => {
  const isExpanded = isOpen === experience.company;

  return (
    <div
      className={`transition-all duration-300 ease-in-out cursor-pointer 
      hover:bg-gray-300 dark:hover:bg-gray-800 
 rounded-lg 
      ${isExpanded ? "p-6 bg-gray-200 dark:bg-gray-900 shadow-lg" : "p-4 bg-white dark:bg-gray-700 shadow-md"} 
      text-base w-full max-w-screen-md text-left text-black dark:text-white mb-4`}
      onClick={() => setOpenExperience(isExpanded ? null : experience.company)}
    >
      <div className="flex items-center sm:items-start sm:flex-row flex-col justify-between w-full transition-all duration-300 ease-in-out">
        
        {/* Company Logo (Hidden on Mobile) */}
        <img
          src={experience.image || `${process.env.PUBLIC_URL}/placeholder.png`}
          alt={`${experience.company} logo`}
          className="hidden sm:block rounded-lg object-cover transition-all duration-300 ease-in-out w-20 h-20 mr-6"
        />

        {/* Experience Info */}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <b className="text-lg sm:text-xl">{experience.company}</b>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic">
                {experience.position} • {experience.date}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{experience.tech}</p>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              {experience.link && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={experience.link}
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
                  setOpenExperience(isExpanded ? null : experience.company);
                }}
              >
                {isExpanded ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
              </button>
            </div>
          </div>

          {/* Expandable Section */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="list-disc pl-5 text-sm sm:text-base">
              {experience.bulletPoints.map((point, idx) => (
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

export default ExperienceCard;
