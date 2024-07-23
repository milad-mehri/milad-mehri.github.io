import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section className="dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:text-white text-black py-10">
      <h2 className="text-3xl font-bold mb-6">Personal Projects</h2>
      <div className="flex flex-col items-center w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
