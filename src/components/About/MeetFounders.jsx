import React from "react";
import founderImg1 from "@/assets/Manish.webp";
import founderImg2 from "@/assets/Yash.webp";
import founderImg3 from "@/assets/Lokesh.webp";
import linkedinIcon from "@/assets/LinkedIn.webp";

import footerBg from "@/assets/AboutUsFooter.webp";

import Atropos from "atropos/react";
import Image from "next/image";

const MeetFounders = () => {
  const founders = [
    {
      img: founderImg1,
      name: "Manish Shara",
      title: "Co- Founder & CEO",
      linkedin: "https://www.linkedin.com/in/manishshara/",
    },
    {
      img: founderImg2,
      name: "Yash Desai",
      title: "Co- Founder",
      linkedin: "https://www.linkedin.com/in/yash-desai-20a3b5b1/",
    },
    {
      img: founderImg3,
      name: "Lokesh Agarwal",
      title: "CTO",
      linkedin: "https://www.linkedin.com/in/lokesh198/",
    },
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center font-bold pt-10">
          Meet our Founders
        </h2>
        <p className="text-xl text-center py-4">Few words from founders desk</p>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 lg:grid-cols-3 my-20 gap-20"
        >
          {founders.map((founder, index) => (
            <div key={index}>
              <Atropos rotateTouch={false} shadowScale={0}>
                <Image src={founder.img} alt="founders image"></Image>
                <div className="flex justify-between items-center">
                  <div>
                    {founder?.name && (
                      <h2 className="text-xl mt-5 font-semibold">
                        {founder?.name}
                      </h2>
                    )}
                    {founder?.title && (
                      <p className="text-sm">{founder?.title}</p>
                    )}
                  </div>
                  <Image
                    className="cursor-pointer"
                    width={40}
                    height={40}
                    src={linkedinIcon}
                    alt="linkedin icon "
                  ></Image>
                </div>
              </Atropos>
            </div>
          ))}
        </div>
      </div>
      <Image
        className="!w-full mb-2"
        src={footerBg}
        alt="footer background"
      ></Image>
    </div>
  );
};

export default MeetFounders;
