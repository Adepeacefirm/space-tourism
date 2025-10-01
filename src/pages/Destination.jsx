import React from "react";
import Navbar from "../components/Navbar";
import PickDestination from "../components/PickDestination";

const Destination = () => {
  return (
    <div className='bg-[url("/background-destination-mobile.jpg")] sm:bg-[url("/background-destination-tablet.jpg")] lg:bg-[url("/background-destination-desktop.jpg")] bg-cover bg-center'>
      <Navbar />
      <PickDestination />
    </div>
  );
};

export default Destination;
