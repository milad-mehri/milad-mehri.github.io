import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import experience from "../data/experience";

const Experience = () => {
  const [openExperience, setOpenExperience] = useState(null);

  return (
    <section className="dark:bg-gray-700 flex flex-col items-center justify-center bg-gray-100 dark:text-white text-black pt-10">
      <h2 className="text-2xl font-bold mb-3">Experience</h2>
      <div className="flex flex-col items-center w-full">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            isOpen={openExperience}
            setOpenExperience={setOpenExperience}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
