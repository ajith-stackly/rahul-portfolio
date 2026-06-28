import React from "react";
import aboutImg from "../assets/logo/about.png";
import { FaRegFileAlt, FaInstagram, FaYoutube, FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import JavaScript from "../assets/logo/JavaScript.png";
import HTML from "../assets/logo/HTML.png";
import NodeJS from "../assets/logo/NodeJS.png";
import CSS from "../assets/logo/CSS.png";
import Tailwind from "../assets/logo/Tailwind.png";
import CPP from "../assets/logo/C++.png";
import AdobePremiumPro from "../assets/logo/AdobePremiumPro.png";
import ReactJS from "../assets/logo/React.js.png";
import Figma from "../assets/logo/Figma.png";
import Material from "../assets/logo/Material.png";
import Qt from "../assets/logo/Qt.png";
import Adobe from "../assets/logo/Adobe.png";
import AdobeIllustrator from "../assets/logo/AdobeIllustrator.png";
import AdobeAfterEffects from "../assets/logo/AdobeAfterEffects.png";

export default function About() {

  const skills = [JavaScript, HTML, NodeJS, CSS, Tailwind, CPP, AdobePremiumPro, ReactJS, Figma, Material, Qt, Adobe, AdobeIllustrator, AdobeAfterEffects,];

  const socialIcons = [FaInstagram, FaYoutube, FaBehance, FaLinkedinIn, FaGithub,];

  return (
    <div className="flex flex-col gap-[30px]">

      <section className="rounded-[10px] bg-[#161B22] py-6">
        <h1 className="font-humane text-center text-[58px] leading-[100%] text-white sm:text-[72px] md:text-[88px] lg:text-[101.76px]">
          ABOUT
        </h1>
      </section>

      <section className="rounded-[10px] bg-[#161B22] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-center">
          <div className="flex w-full justify-center xl:w-[38%]">
            <img src={aboutImg} alt="About"
              className="w-full max-w-[440px] rounded-[18px] object-cover transition-transform duration-500 hover:scale-[1.03]" />
          </div>

          <div className="flex w-full flex-col xl:w-[62%]">

            <p className="font-nunito text-[16px] leading-[180%] text-white sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] xl:leading-[105%]">
              I'm a Computer Science student at <span className="text-[#D5FF3F]">SRM Institute of Science and Technology</span>. My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on <span className="text-[#D5FF3F]">React Native, Expo, Firebase, and React</span>, leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the <span className="text-[#D5FF3F]">Play Store and App Store</span>, and it incorporates AI-driven features to guide users through the adoption process. In addition to app development, I've led the design and development of platforms like the GitHub Community SRM website, which serves as an all-in-one platform for the community. I've also organized and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I thrive in <span className="text-[#D5FF3F]">Agile Scrum environments</span> and believe collaboration and teamwork are essential to delivering successful projects. I'm always eager to work on impactful projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you're <span className="text-[#D5FF3F]">looking for a dedicated developer, a creative designer, or a collaborative team member</span>, I'm here to help bring ideas to life. Let's connect and create innovative solutions together!
            </p>

            <button className="mt-8 flex w-fit items-center gap-3 rounded-lg border border-[#D5FF3F] px-6 py-3 font-dmsans font-semibold text-[#D5FF3F] transition-all duration-300 hover:bg-[#D5FF3F] hover:text-[#161B22]">
              <FaRegFileAlt /> Download Resume
            </button>
          </div>
        </div>

      </section>
      <section className="grid gap-5 xl:grid-cols-[3fr_1.2fr]">
        <div className="relative overflow-hidden rounded-[12px] bg-[#161B22] p-6">
          <h2 className="mb-8 font-dmsans text-[24px] font-bold text-white">
            Skills
          </h2>

          <div className="absolute bottom-0 left-0 z-10 h-[90px] w-[170px] bg-gradient-to-r from-[#161B22] to-transparent"></div>
          <div className="absolute bottom-0 right-0 z-10 h-[90px] w-[170px] bg-gradient-to-l from-[#161B22] to-transparent"></div>
          <div className="marquee">
            <div className="marquee-content">
              {skills.map((skill, index) => (
                <img key={index} src={skill} alt=""
                  className="h-[50px] w-[50px] flex-shrink-0 object-contain transition-all duration-300 hover:scale-110 hover:-translate-y-1"/>
              ))}

              {skills.map((skill, index) => (
                <img key={`copy-${index}`} src={skill} alt=""
                  className="h-[50px] w-[50px] flex-shrink-0 object-contain transition-all duration-300 hover:scale-110 hover:-translate-y-1"/>
              ))}

            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 rounded-[12px] bg-[#161B22] p-6 sm:p-8">
          {socialIcons.map((Icon, index) => (
            <div key={index}>
              <Icon className="cursor-pointer text-[28px] text-[#D5FF3F] transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-white sm:text-[32px] lg:text-[36px]" />
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}