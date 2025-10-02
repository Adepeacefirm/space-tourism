import React from "react";
import Navbar from "../components/Navbar";
import Space from "../components/Space";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      key={"home-page"}
      initial={{ opacity: 0.1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Space />
    </motion.div>
  );
};

export default Home;
