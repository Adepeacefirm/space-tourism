import React from "react";
import Navbar from "../components/Navbar";
import LaunchTechnology from "../components/LaunchTechnology";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <motion.div
      key={"tech-page"}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className='bg-[url("/background-technology-mobile.jpg")] sm:bg-[url("/background-technology-tablet.jpg")] lg:bg-[url("/background-technology-desktop.jpg")] bg-cover bg-center'
    >
      <Navbar />
      <LaunchTechnology />
    </motion.div>
  );
};

export default Technology;
