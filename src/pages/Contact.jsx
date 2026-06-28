import React, { useState } from "react";

export default function Contact() {

  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");

    setFormData(initialForm);
  };

  return (
    <div className="flex flex-col gap-[30px]">

      <section className="bg-[#161B22] rounded-[10px] py-6">
        <h1 className="font-humane font-bold text-center text-[58px] leading-[100%] text-white sm:text-[72px] md:text-[88px] lg:text-[101.76px]">
          CONTACT
        </h1>
      </section>

      <section className="bg-[#D5FF3F] rounded-[24px] px-5 py-8 sm:px-8 sm:py-10 lg:px-[58px] lg:pt-[55px] lg:pb-[70px]">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:items-start">
          <div className="w-full xl:max-w-[455px]">
            <h2 className="font-humane font-bold text-[68px] leading-[89%] text-[#161B22] sm:text-[90px] md:text-[110px] lg:text-[141px]">
              Get in Touch
            </h2>

            <p className=" max-w-[460px] font-dmsans text-[18px] leading-[140%] text-[#161B22] sm:text-[20px] lg:text-[25px]">
              If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
            </p>

          </div>

          <div className="w-full xl:max-w-[590px]">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="mb-[5px] font-dmsans font-bold text-[18px] text-[#161B22] sm:text-[20px] lg:text-[25px]">
                Name
              </label>

              <input type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mb-[14px] h-[48px] w-full rounded-[10px] bg-white px-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#161B22] lg:h-[51px]" />

              <label className="mb-[5px] font-dmsans font-bold text-[18px] text-[#161B22] sm:text-[20px] lg:text-[25px]">
                Email
              </label>

              <input type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-[14px] h-[48px] w-full rounded-[10px] bg-white px-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#161B22] lg:h-[51px]" />

              <label className="mb-[5px] font-dmsans font-bold text-[18px] text-[#161B22] sm:text-[20px] lg:text-[25px]">
                Message
              </label>

              <textarea name="message"
                value={formData.message}
                onChange={handleChange}
                className="mb-[14px] h-[180px] w-full resize-none rounded-[10px] bg-white p-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#161B22] sm:h-[220px] lg:h-[272px]" />
              <button type="submit"
                className="flex h-[48px] w-full items-center justify-center rounded-[10px] bg-[#161B22] font-dmsans text-[18px] font-bold text-[#D5FF3F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#242B35] active:scale-[0.98] sm:h-[50px] sm:text-[20px] lg:h-[51px] lg:text-[25px]">
                Send
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}