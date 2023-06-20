import Image from "next/image";
import React from "react";

import whyCard1 from "@/assets/whyCard1.svg";
import whyCard2 from "@/assets/whyCard2.svg";
import whyCard3 from "@/assets/whyCard3.svg";
import whyCard4 from "@/assets/whyCard4.svg";
import whyCard5 from "@/assets/whyCard5.svg";
import whyCard6 from "@/assets/whyCard6.svg";

import heroImg from "@/assets/whyUsHero.webp";
import heroImgBg from "@/assets/whychooseherobg.webp";

const WhyChooseUs = () => {
  const cardInfo = [
    {
      title: "Zero Investment",
      info: "Build your business without any investment",
      icon: whyCard1,
    },
    {
      title: "Quick Payout",
      info: "Direct Payout in your bank account in short time",
      icon: whyCard2,
    },
    {
      title: "Limitless Earnings",
      info: "Direct Payout in your bank account in short time",
      icon: whyCard3,
    },
    {
      title: "Training & Upskilling",
      info: "Get trained by finance and sales experts",
      icon: whyCard4,
    },
    {
      title: "Customer Support",
      info: "Access tools and content to build relationship",
      icon: whyCard5,
    },
    {
      title: "Financial Products",
      info: "Trustworthy & high-rated products & categories",
      icon: whyCard6,
    },
  ];
  return (
    <div className="flex items-center flex-col lg:flex-row py-20">
      <div className="relative lg:w-[50%] flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center">
          Why <span className="text-primary">Choose Us</span>
        </h2>
        <p className="text-center ">Why we are loved by our customers</p>

        <Image
          className="absolute -z-10 h-full top-0"
          src={heroImgBg}
          alt="line"
          width="100%"
          height="100%"
        />
        <Image
          className="pt-8"
          src={heroImg}
          alt="line"
        />
      </div>
      <div data-aos="fade-up" data-aos-duration='1000' className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {cardInfo.map((card, index) => (
          <div key={index} className="card lg:justify-start text-left">
            <figure className="lg:!justify-start">
              <Image className="h-20 w-20" src={card.icon} alt="Card image"></Image>
            </figure>
            <div className="card-body px-2 lg:p-0">
              <h2 className="card-title justify-center lg:justify-start text-black">{card.title}</h2>
              <p className="text-center lg:text-left">{card.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
