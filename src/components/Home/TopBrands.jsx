"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/swiper.min.css';
import { Autoplay } from "swiper";

//import sliders
import slider1 from "@/assets/slider1.webp";
import slider2 from "@/assets/slider2.webp";
import slider3 from "@/assets/slider3.webp";
import slider4 from "@/assets/slider4.webp";
import slider5 from "@/assets/slider5.webp";
import slider6 from "@/assets/slider6.webp";
import slider7 from "@/assets/slider7.webp";
import slider8 from "@/assets/slider8.webp";
import slider9 from "@/assets/slider9.webp";
import slider10 from "@/assets/slider10.webp";
import Image from "next/image";

const TopBrands = () => {
  const sliders = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
  ];
  return (
    <div className="min-h-[50vh] flex flex-col justify-center">
      <h2 className="text-center text-3xl font-bold">Top Brands on ZET</h2>
      <p className="text-center my-5">
        We are trusted by best brand in the country
      </p>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          speed={2000}
          autoplay={{
            enabled: true,
            delay: 100,
            reverseDirection: false,
          }}
          onDurationChange={false}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {sliders.map((slider, index) => (
            <SwiperSlide key={index}>
              <Image
                className="border-2 rounded-lg px-5 py-2"
                src={slider}
                alt="slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopBrands;
