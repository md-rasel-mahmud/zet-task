import React from "react";

const AboutBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          background: "url(aboutBanner.webp) no-repeat center center / cover",
        }}
      >
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">OUR MISSION</h1>
            <p className="mb-5">
              Enabling financial inclusion for the next billion Indians & making
              their Zindagi Set. Building a platform that enables you to sell
              financial products & earn up to Rs. 1 lakh every month.
            </p>
            <p className="uppercase text-lg font-semibold tracking-widest">
              EARN BETTER. LIVE BETTER.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
