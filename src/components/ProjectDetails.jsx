import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PortfolioBg from "../assets/Images/PortfolioBg.png";
import Portfolio from "../assets/Images/Portfolio.png";
import ProjectIcons from "../assets/Images/ProjectIcons.png";

export default function ProjectDetails() {
  return (
    <div className="pt-[40px] pb-[60px]">

      <div className="mb-[30px]">
        <Link to="/projects" className="w-[102px] h-[48px] rounded-[10px] bg-[#161B22] flex items-center justify-center gap-2 font-dmsans font-bold text-[18px] text-white hover:bg-[#222831] transition-all duration-300">
          <FontAwesomeIcon icon={faArrowLeft} className="text-[14px]" />
          Back
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-[24px] xl:gap-[30px]">

        <div className="relative w-full lg:w-[58%] h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[457px] rounded-[10px] overflow-hidden flex-shrink-0">
          <img src={PortfolioBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img src={Portfolio} alt="Portfolio Preview"
            className="absolute top-[16px] left-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] md:top-[24px] md:left-[24px] md:w-[calc(100%-48px)] md:h-[calc(100%-48px)] lg:top-[32px] lg:left-[32px] lg:w-[calc(100%-64px)] lg:h-[calc(100%-64px)] rounded-[10px] lg:rounded-[14px] object-cover" />
        </div>

        <div className="w-full lg:w-[42%] flex flex-col justify-center">
          <h1 className="font-dmsans font-bold text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[44.76px] leading-[88%] text-white">
            Portfolio
          </h1>

          <p className="mt-[14px] font-dmsans font-medium text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[25.78px] leading-[88%] text-[#D5FF3F]">
            Frontend
          </p>

          <p className="mt-[14px] font-dmsans font-normal text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[21.71px] leading-[150%] text-[#8B949E]">
            This project is a portfolio website developed using React.js. The
            website is designed to showcase the user's skills, projects, and
            services. It features a modern and clean design with smooth
            navigation and responsive layout.
          </p>

          <div className="mt-[16px]">
            <h2 className="font-dmsans font-bold text-[20px] sm:text-[22px] lg:text-[26px] xl:text-[27.14px] leading-[88%] text-white">
              Tech Stack
            </h2>
            <img src={ProjectIcons} alt="Tech Stack" className="mt-[14px] w-[180px] sm:w-[220px] lg:w-[240px] xl:w-[260px] h-auto object-contain" />
          </div>

          <div className="mt-[20px] flex flex-col sm:flex-row gap-[10px]">
            <button className="w-full sm:flex-1 lg:w-[226px] h-[52px] lg:h-[60px] rounded-[10px] bg-[#D5FF3F] flex items-center justify-center gap-[8px] font-dmsans font-bold text-[18px] lg:text-[20px] xl:text-[22.92px] leading-[88%] text-[#161B22] hover:bg-[#c5ee35] transition-all duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faLaptopCode} className="text-[20px] lg:text-[24px]" />
              Demo
            </button>
            <button className="w-full sm:flex-1 lg:w-[226px] h-[52px] lg:h-[60px] rounded-[10px] bg-[#D5FF3F] flex items-center justify-center gap-[8px] font-dmsans font-bold text-[18px] lg:text-[20px] xl:text-[22.92px] leading-[88%] text-[#161B22] hover:bg-[#c5ee35] transition-all duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faGithub} className="text-[20px] lg:text-[24px]" />
              GitHub
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[30px] bg-[#161B22] rounded-[20px] px-[20px] py-[28px] sm:px-[28px] sm:py-[32px] md:px-[36px] md:py-[36px] lg:px-[46px] lg:pt-[39px] lg:pb-[55px]">

        <h2 className="font-dmsans font-bold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44.76px] leading-[88%] text-[#D5FF3F]">
          Main Features
        </h2>

        <ul className="mt-[24px] flex flex-col gap-[11px] list-disc pl-[28px]">
          <li className="marker:text-[22px] sm:marker:text-[24px] md:marker:text-[26px] lg:marker:text-[30px] marker:text-white">
            <h3 className="font-dmsans font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[100%] text-white">
              Responsive Design
            </h3>
            <p className="mt-[8px] ml-[2px] font-dmsans font-normal text-[15px] sm:text-[17px] md:text-[20px] lg:text-[25px] leading-[150%] text-[#8B949E]">
              The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.
            </p>
          </li>
          <li className="marker:text-[22px] sm:marker:text-[24px] md:marker:text-[26px] lg:marker:text-[30px] marker:text-white">
            <h3 className="font-dmsans font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[100%] text-white">
              Modern UI/UX
            </h3>
            <p className="mt-[8px] ml-[2px] font-dmsans font-normal text-[15px] sm:text-[17px] md:text-[20px] lg:text-[25px] leading-[150%] text-[#8B949E]">
              The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.
            </p>
          </li>
        </ul>

      </div>
    </div>
  );
}