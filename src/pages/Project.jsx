import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <div className="">
      <div className="bg-[#161B22] rounded-[10px] flex items-center justify-center py-[25px]">
        <h1 className="font-humane text-[52px] sm:text-[64px] md:text-[80px] lg:text-[101.76px] leading-[100%] text-white">Projects</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[34px] gap-y-[32px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}