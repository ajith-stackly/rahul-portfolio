import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faYoutube,faBehance,faLinkedin,faGithub,} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function GetinTouch() {
  return (

    <section className="w-full rounded-[24px] bg-[#D5FF3F] px-5 py-8 sm:px-8 sm:py-10 lg:px-[50px] lg:py-[48px]">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

        <div className="text-center lg:text-left">

          <h2 className="font-humane text-[60px] leading-[89%] text-[#161B22] sm:text-[90px] lg:text-[141.14px]">
            Get In Touch
          </h2>

          <p className="mt-3 max-w-[465px] font-nunito text-[17px] leading-[150%] text-[#161B22] sm:text-[20px] lg:text-[25px] lg:leading-[110%]">
            If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-end">
          <div className="text-center lg:text-right">
            <p className="mb-2 font-nunito text-[20px] font-bold text-[#161B22] sm:text-[22px] lg:text-[24px]">
              Follow me on
            </p>

            <div className="flex items-center justify-center gap-3 text-[#161B22] lg:justify-end">
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-[28px] transition-transform duration-300 hover:scale-110 lg:text-[30px]" />
              <FontAwesomeIcon icon={faYoutube} className="cursor-pointer text-[30px] transition-transform duration-300 hover:scale-110 lg:text-[33px]"/>
              <FontAwesomeIcon icon={faBehance} className="cursor-pointer text-[28px] transition-transform duration-300 hover:scale-110 lg:text-[30px]"/>
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-[28px] transition-transform duration-300 hover:scale-110 lg:text-[30px]"/>
              <FontAwesomeIcon icon={faGithub} className="cursor-pointer text-[28px] transition-transform duration-300 hover:scale-110 lg:text-[30px]"/>
            </div>
          </div>

          <Link to="/contact"className="flex items-center gap-2 rounded-2xl border-[3px] border-[#161B22] px-5 py-2 font-nunito text-[18px] font-bold text-[#161B22] transition-all duration-300 hover:bg-[#161B22] hover:text-[#D5FF3F] sm:px-6 sm:py-3 sm:text-[22px] lg:text-[25px]">
            Contact Me <FontAwesomeIcon icon={faPaperPlane} className="text-[14px] lg:text-[16px]" />
          </Link>

        </div>
      </div>
    </section>
  );
}