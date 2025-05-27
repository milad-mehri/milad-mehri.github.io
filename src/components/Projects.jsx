import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section className="dark:bg-gray-700 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:text-white text-black py-10">
      <h2 className="text-2xl font-bold mb-3">Personal Projects</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500/70 dark:text-gray-400/70 mb-4 text-opacity-70">
        <FaStar className="text-yellow-500/50 animate-spin-slow" />
        <span>Personal favorites</span>
      </div>
      <div className="flex flex-col items-center w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isOpen={openProject}
            setOpenProject={setOpenProject}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
