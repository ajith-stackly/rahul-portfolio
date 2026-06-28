import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => {
        if (project.id === 1) {
          navigate("/projects/portfolio");
        }
      }}
      className="group w-full overflow-hidden rounded-[20px] bg-[#161B22] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] cursor-pointer">
      <div className="relative h-[180px] overflow-hidden rounded-t-[20px] sm:h-[210px] md:h-[235px] lg:h-[268px]">

        <img src={project.background} alt={project.title} 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

        <img src={project.preview} alt={project.title}
          className="absolute left-5 top-5 h-[calc(100%-40px)] w-[calc(100%-40px)] rounded-[10px] object-cover" />
      </div>

      <div className="flex flex-col px-5 pt-[30px] pb-[36px]">

        <h2 className="font-dmsans text-[26px] font-bold leading-tight text-white sm:text-[28px] lg:text-[32.99px]">
          {project.title}
        </h2>

        <p className="mt-2 font-nunito text-[16px] font-medium text-[#D5FF3F] sm:text-[18px] lg:text-[19px]">
          {project.category}
        </p>

        <div className="mt-3 min-h-[88px]">
          <p className="font-nunito text-[15px] leading-[150%] text-[#8B949E] lg:text-[16px]">
            {project.description}
          </p>
        </div>

        <div className="mt-6">
          <img
            src={project.technologies}
            alt={`${project.title} Technologies`}
            className="h-auto w-full max-w-[240px] object-contain object-left"
          />
        </div>

      </div>
    </div>
  );
}