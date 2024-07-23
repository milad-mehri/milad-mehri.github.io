import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className=" p-5 text-base max-w-screen-md text-left  transition ease-in-out  text-black dark:text-white">
      <div className="flex items-center">
        <img
          src={project.image || `${process.env.PUBLIC_URL}/placeholder.png`}
          alt={project.name + " Milad Mehri"}
          className="rounded-lg w-40 h-40 object-cover mr-14"
        />
        <div className="flex flex-col">
          <div className="flex space justify-between">
            <div>
              <b className="self-start text-xl">{project.name}</b>
              <p className="mb-3 text-sm self-start text-gray-600 dark:text-gray-400 italic">
                {project.tech}
              </p>
              {/* <p className="text-sm">{project.description}</p> */}

              <ul className="list-disc ">
                {project.bulletPoints.map((point, idx) => (
                  <li className="self-start" key={idx}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex">
              <a
                target="_blank"
                href={project.github}
                className="p-1   hover:text-gray-600"
              >
                <FaGithub size={20} />
              </a>
              {project.link && (
                <a
                  target="_blank"
                  href={project.link}
                  className="p-1  hover:text-gray-600"
                >
                  <FaExternalLinkSquareAlt size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0 min-h-0.5 bg-gradient-to-r mt-10 from-transparent via-gray-700 to-transparent dark:via-white " />
      
    </div>
  );
};

export default ProjectCard;
