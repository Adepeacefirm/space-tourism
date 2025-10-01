import React from "react";

const Space = () => {
  return (
    <main className="w-[80%] mx-auto py-5 lg:flex lg:justify-between lg:mt-20 lg:items-center">
      <div className="lg:w-[42%]">
        <p className="text-blue300 text-center text-xs md:text-2xl lg:text-lg lg:text-start">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="text-white text-center text-6xl md:text-9xl lg:text-8xl my-7 lg:text-start">SPACE</h1>
        <p className="text-blue300 text-center md:text-xl lg:text-base md:px-5 lg:px-0">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="my-20 lg:w-[50%]">
        <div className="w-[50%] aspect-square flex justify-center items-center rounded-full mx-auto cursor-pointer bg-white hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)]">
          <p className="sm:text-[2rem]">EXPLORE</p>
        </div>
      </div>
    </main>
  );
};

export default Space;
