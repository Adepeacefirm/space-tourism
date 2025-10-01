import React from "react";
import Navbar from "../components/Navbar";
import LaunchTechnology from "../components/LaunchTechnology";

const Technology = () => {
  return (
    <div className='bg-[url("/background-technology-mobile.jpg")] sm:bg-[url("/background-technology-tablet.jpg")] lg:bg-[url("/background-technology-desktop.jpg")] bg-cover bg-center'>
      <Navbar />
      <LaunchTechnology />
    </div>
  );
};

export default Technology;
