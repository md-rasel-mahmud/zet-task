import React from "react";

import featuredImg1 from '@/assets/featuredImg1.webp'
import featuredImg2 from '@/assets/featuredImg2.webp'
import featuredImg3 from '@/assets/featuredImg3.webp'
import featuredImg4 from '@/assets/featuredImg4.webp'
import featuredImg5 from '@/assets/featuredImg5.webp'
import Image from "next/image";

const Featured = () => {
  return (
    <div className="bg-[#fafbfe] py-20 mx-2 lg:mx-0">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold">Got Featured</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-5">
            <Image src={featuredImg1} alt="Featured Image"></Image>
            <Image src={featuredImg2} alt="Featured Image"></Image>
            <Image src={featuredImg3} alt="Featured Image"></Image>
            <Image src={featuredImg4} alt="Featured Image"></Image>
            <Image src={featuredImg5} alt="Featured Image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Featured;
