import Image from "next/image";
import bannerImg from "../assets/banner-img.webp";
import playstoreImg from "../assets/plastoreIcon.svg";

const HomeBanner = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="flex flex-col-reverse rounded md:flex-row justify-between bg-[#e9f4ff] lg:h-[360px] my-10 lg:my-[110px] w-full lg:mx-auto mb-auto items-end">
        <div className="p-6 text-center lg:text-left lg:p-14 w-full mx-auto lg:w-1/2 flex flex-col items-start h-full justify-center gap-3">
          <h1 className="text-4xl leading-snug font-bold text-black">
            Become a Financial Advisor and{" "}
            <span className="text-primary">Earn Rs.1 Lakh/Month</span>
          </h1>
          <p className="text-xl text-black">No investment required</p>

          <div className="w-full lg:w-fit">
            <Image
              className="w-32 mx-auto lg:ml-5"
              src={playstoreImg}
              alt="Playstore Image"
            ></Image>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image
            className="w-[32vw] mr-8"
            src={bannerImg}
            alt="A Happy man with good earning"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
