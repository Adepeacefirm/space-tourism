import React from "react";
import Navbar from "../components/Navbar";
import LaunchTechnology from "../components/LaunchTechnology";
import { motion } from "framer-motion";

const Technology = () => {
  return (
    <motion.div
      key={"tech-page"}
      initial={{ opacity: 0.1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <LaunchTechnology />
    </motion.div>
  );
};

export default Technology;
