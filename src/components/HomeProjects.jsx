import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function HomeProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="w-full">

      <div className="mb-6 flex items-center justify-between rounded-[10px] bg-[#161B22] px-5 py-5 sm:px-7 sm:py-6 lg:px-[45px] lg:py-[32px]">
        <h2 className="font-humane text-[48px] leading-[89%] text-white sm:text-[58px] md:text-[66px] lg:text-[74px]">
          Recent Projects
        </h2>

        <Link to="/projects" className="font-dmsans text-[14px] font-bold text-white transition-colors duration-300 hover:text-[#D5FF3F] sm:text-[15px] lg:text-[22px]">
          See all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:gap-x-[34px] xl:gap-y-[32px]">

        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>

    </section>
  );
} 