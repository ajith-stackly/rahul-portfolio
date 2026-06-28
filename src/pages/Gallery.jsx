import React from "react";
import { galleryColumns } from "../data/gallery";

export default function Gallery() {
  return (
    <section className="">

      <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 gap-[10.73px]">

        {galleryColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-[10.73px]">

            {columnIndex === 0 && (
              <div className="w-full h-[90px] bg-[#161B22] rounded-[3.58px] flex items-center justify-center">
                <h1 className="font-humane font-bold text-[42px] sm:text-[50px] lg:text-[61px] leading-[100%] text-white">
                  Gallery
                </h1>
              </div>
            )}

            {column.map((item) => (
              <img key={item.id} src={item.src} alt={item.alt} style={{ height: item.height }}
                className="w-full object-cover transition-all duration-300 hover:scale-[1.02]"/>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden xl:flex items-start gap-[10.73px]"> 
        <div className="w-[358.08px] flex flex-col gap-[10.73px]">
          <div className="w-[358.08px] h-[90px] bg-[#161B22] rounded-[3.58px] flex items-center justify-center">
            <h1 className="font-humane font-bold text-[61.44px] leading-[100%] text-white">
              Gallery
            </h1>
          </div>

          {galleryColumns[0].map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} style={{ height: item.height }}
              className="w-full object-cover transition-all duration-300 hover:scale-[1.02]"/>
          ))}

        </div>

        <div className="w-[357.80px] flex flex-col gap-[10.73px]">

          {galleryColumns[1].map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} style={{ height: item.height }}
              className="w-full object-cover transition-all duration-300 hover:scale-[1.02]" />
          ))}

        </div>

        <div className="w-[364.96px] p-[3.58px] flex flex-col gap-[10.73px]">

          {galleryColumns[2].map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} style={{ height: item.height }}
              className="w-full object-cover transition-all duration-300 hover:scale-[1.02]" />
          ))}

        </div>


        <div className="w-[364.96px] p-[3.58px] flex flex-col gap-[10.73px]">

          {galleryColumns[3].map((item) => (
            <img
              key={item.id} src={item.src} alt={item.alt} style={{ height: item.height }}
              className="w-full object-cover transition-all duration-300 hover:scale-[1.02]"/>
          ))}

        </div>

      </div>

    </section>
  );
}