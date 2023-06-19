"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import playStore from "@/assets/plastoreIcon.svg";
import easyStepsBg from "@/assets/easystepsBg.svg";

const EasySteps = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-96 lg:pt-20 pb-56 bg-[#0a2540]"
      style={{ clipPath: "polygon(0% 27%, 100% 0%, 100% 73%, 0% 100%)" }}
    >
      <h2 className="text-white text-center text-2xl font-bold mt-28">
        Start Earning in 3 Easy Steps
      </h2>
      <p className="text-white text-center lg:text-left pb-20">
        We have create the app the make your earning easy
      </p>
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper block"
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-between items-center relative">
              <div className="flex flex-col w-1/2 items-flex-start">
                <button
                  style={{
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                  }}
                  className="py-3 px-8 pl-3 routn bg-[#538bff] border-0 rounded text-white font-semibold text-lg w-fit"
                >
                  Step-1
                </button>
                <h3 className="text-left py-8 text-[#9ecfff] text-2xl font-semibold">
                  Download the App and Sign up as a ZET agent
                </h3>
                <div>
                  <Image
                    className="!w-28 mb-10"
                    src={playStore}
                    alt="play store"
                  ></Image>
                </div>
              </div>

              <video autoPlay loop muted className="h-96 rounded-3xl">
                <source src="easy-steps-video.mp4" type="video/mp4" />
              </video>
              <Image
                className="absolute object-contain top-0 right-[-2rem] !w-1/3 -z-10 "
                src={easyStepsBg}
                alt="easy steps"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-between items-center relative">
              <div className="flex flex-col w-1/2 items-flex-start">
                <button
                  style={{
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                  }}
                  className="py-3 px-8 pl-3 routn bg-[#538bff] border-0 rounded text-white font-semibold text-lg w-fit"
                >
                  Step-1
                </button>
                <h3 className="text-left py-8 text-[#9ecfff] text-2xl font-semibold">
                  Register your customers and Recommend financial products
                </h3>
                <div>
                  <Image
                    className="!w-28 mb-10"
                    src={playStore}
                    alt="play store"
                  ></Image>
                </div>
              </div>

              <video autoPlay loop muted className="h-96 rounded-3xl">
                <source src="easy-steps-video.mp4" type="video/mp4" />
              </video>
              <Image
                className="absolute object-contain top-0 right-[-2rem] !w-1/3 -z-10 "
                src={easyStepsBg}
                alt="easy steps"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row justify-between items-center relative">
              <div className="flex flex-col w-1/2 items-flex-start">
                <button
                  style={{
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                  }}
                  className="py-3 px-8 pl-3 routn bg-[#538bff] border-0 rounded text-white font-semibold text-lg w-fit"
                >
                  Step-1
                </button>
                <h3 className="text-left py-8 text-[#9ecfff] text-2xl font-semibold">
                  Start earning upto ₹ 1 Lakh every month
                </h3>
                <div>
                  <Image
                    className="!w-28 mb-10"
                    src={playStore}
                    alt="play store"
                  ></Image>
                </div>
              </div>

              <video autoPlay loop muted className="h-96 rounded-3xl">
                <source src="easy-steps-video.mp4" type="video/mp4" />
              </video>
              <Image
                className="absolute object-contain top-0 right-[-2rem] !w-1/3 -z-10 "
                src={easyStepsBg}
                alt="easy steps"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EasySteps;
