"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import teamImg from "@/assets/team.webp";

const Team = () => {
  //   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     // progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
  return (
    <div
      className="min-h-screen bg-[#145cc5] py-[7vw]"
      style={{ clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
    >
      <div
        style={{ clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)" }}
        className="flex  bg-[#417fda] items-center max-w-screen-lg mx-auto pt-[7vw] pb-[3vw]"
      >
        <div className="w-[55%] block">
          <Image
            className="w-auto h-[27vw] mix-blend-luminosity"
            src={teamImg}
            alt="team"
          ></Image>
        </div>

        <div className="w-[54%] ml-[-9vw] p-10">
          <h2 className="text-xl mb-8 font-bold text-white">THE ZET EFFECT</h2>
          <Swiper
            spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper block"
          >
            <SwiperSlide>
              <h3 className="text-left pb-8 text-3xl font-semibold">
                We helped customers in more than 50 cities to get their first
                financial product
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="text-left pb-8 text-3xl font-semibold">
                More than ₹20 Cr earned by our Agents by selling Credit Cards
                and Loans
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="text-left pb-8 text-3xl font-semibold">
                14 Lakh+ Financial Advisor across India are using ZET to
                increase their income.
              </h3>
            </SwiperSlide>

            {/* <div className="autoplay-progress" slot="container-end">
              <span ref={progressContent}></span>
            </div> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Team;
