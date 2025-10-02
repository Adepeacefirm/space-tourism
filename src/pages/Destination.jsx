import React from "react";
import Navbar from "../components/Navbar";
import PickDestination from "../components/PickDestination";
import { motion } from "framer-motion";

const Destination = () => {
  return (
    <motion.div
      key={"destination-page"}
      initial={{ opacity: 0.1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <PickDestination />
    </motion.div>
  );
};

export default Destination;
