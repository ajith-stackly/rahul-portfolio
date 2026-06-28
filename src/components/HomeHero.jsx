import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#131313] min-h-[650px] lg:h-[764px]">

      <div className="absolute top-[40px] lg:top-[53px] left-0 right-0 flex whitespace-nowrap animate-bg-left select-none pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="mr-10 font-bebas text-[120px] sm:text-[150px] md:text-[180px] xl:text-[235px] leading-[100%] text-[#1C1C1C]"
            style={{ WebkitTextStroke: "2.5px #BDE23A33" }}>
            UI DESIGNER &nbsp; UI &nbsp; DESIGNER &nbsp;
          </span>
        ))}
      </div>

      <div className="absolute bottom-[150px] lg:bottom-[215px] left-0 right-0 flex whitespace-nowrap animate-bg-right select-none pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="mr-10 font-bebas text-[120px] sm:text-[150px] md:text-[180px] xl:text-[235px] leading-[100%] text-[#1C1C1C]"
            style={{ WebkitTextStroke: "2.5px #BDE23A33" }} >
            DEVELOPER &nbsp; FRONT END &nbsp;
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 md:w-32 xl:w-[200px] bg-[linear-gradient(90deg,#131313_22.51%,rgba(19,19,19,0)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 md:w-32 xl:w-[200px] bg-[linear-gradient(270deg,#131313_22.51%,rgba(19,19,19,0)_100%)]" />
      <div className="absolute left-1/2 top-[145px] lg:top-[145px] -translate-x-1/2 flex w-full max-w-fit flex-col items-center px-4 text-center">

        <p className="mb-6 lg:mb-[36px] font-general text-[20px] sm:text-[24px] lg:text-[32px] font-medium leading-[100%] text-[#D5FF3F]">
          Hey There I'm
        </p>
        <h1 className="font-humane text-[130px] sm:text-[180px] md:text-[240px] xl:text-[339px] font-bold leading-[70%] text-[#D5FF3F]">
          RAHUL
        </h1>
        <p className="mt-2 mb-4 lg:mb-[16px] font-general text-[16px] sm:text-[18px] lg:text-[23px] font-medium leading-[138%] text-[#D5FF3F]">
          Currently Studying Computer Science <br /> and Engineering
        </p>

        <div className="flex items-center gap-6 lg:gap-[35px]">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D5FF3F] lg:h-[42px] lg:w-[42px]">
            <FaLinkedinIn className="text-lg text-[#131313] lg:text-[28px]" />
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D5FF3F] lg:h-[45px] lg:w-[45px]">
            <FaGithub className="text-xl text-[#131313] lg:text-[30px]" />
          </div>

        </div>
      </div>
    </section>
  );
}