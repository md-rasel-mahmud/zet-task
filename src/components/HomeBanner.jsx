import Image from "next/image";
import bannerImg from "../assets/banner-img.webp";
import playstoreImg from "../assets/plastoreIcon.svg";

const HomeBanner = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#e9f4ff] h-[360px] my-[110px] mb-auto items-end">
        <div className="p-14 w-1/2 flex flex-col items-start h-full justify-center gap-3">
          <h1 className="text-4xl leading-snug font-bold text-black">
            Become a Financial Advisor and{" "}
            <span className="text-primary">Earn Rs.1 Lakh/Month</span>
          </h1>
          <p className="text-xl text-black">No investment required</p>

            <Image
            className="w-28 ml-5"
              src={playstoreImg}
              alt="Playstore Image"
            ></Image>
        </div>
        <div>
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
