import React from "react";
import logo from "../assets/logo/Footer-logo.png";

export default function Footer() {
  return (
    <footer className="mt-[15px] bg-[#161B22] rounded-t-[24px] px-[20px] py-[30px] sm:px-[30px] sm:py-[35px] md:px-[40px] md:py-[40px] lg:px-[50px] lg:py-[50px] flex flex-col md:flex-row items-center justify-between gap-8">

      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo Not Found" className="w-[180px] sm:w-[210px] md:w-[230px] lg:w-[250px] xl:w-[280px] h-auto object-contain"/>
      </div>

      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <h1 className="font-humane font-medium text-[48px] sm:text-[64px] md:text-[78px] lg:text-[96px] xl:text-[111.47px] leading-[88%] text-[#6C757D]">
          Designing the <span className="font-bold text-[#D5FF3F]">extraordinary</span>
          <br />
          one <span className="font-bold text-[#D5FF3F]">pixel</span> at a time.
        </h1>

        <p className="mt-3 font-nunito font-semibold text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] leading-[100%] text-[#636B73]">
          Portfolio v2.3 © 2024 Rahul
        </p>
      </div>
    </footer>
  );
}