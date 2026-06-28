import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="w-full rounded-[24px] bg-[#D5FF3F] px-5 py-8 sm:px-8 sm:py-10 lg:px-[40px] lg:py-[20px]">

      <h2 className="mb-5 text-center font-humane text-[52px] leading-[89%] text-[#161B22] sm:text-[60px] lg:text-[64px]">
        About
      </h2>

      <p className="mx-auto max-w-[1110px] text-justify font-nunito text-[16px] font-normal leading-[165%] text-[#161B22] sm:text-[18px] lg:text-[22px] lg:leading-[130%]">
        Hi there! I'm Rahul, a third-year Computer Science student at SRM
        Institute with a passion for crafting user-centric experiences. I
        specialize in UI/UX design, front-end development, and graphic design,
        with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS,
        QML, and C++. I thrive on collaboration and bring experience in Agile
        Scrum methodologies. Beyond coding, I enjoy photography, graphic design,
        and exploring music. Let's connect and bring your digital visions to
        life.
      </p>

      <div className="mx-auto mt-6 flex w-full max-w-[1110px] justify-end sm:mt-8">
        <Link to="/about" className="rounded-[10px] bg-[#161B22] px-5 py-2 font-dmsans text-[14px] font-semibold text-[#D5FF3F] transition-all duration-300 hover:opacity-90 sm:px-6 sm:py-[10px] sm:text-[15px]">
          More...
        </Link>
      </div>
    </section>
  );
}