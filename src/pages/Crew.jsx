import React from "react";
import Navbar from "../components/Navbar";
import MeetCrew from "../components/MeetCrew";
import { motion } from "framer-motion";

const Crew = () => {
  return (
    <motion.div
      key={"crew-page"}
      initial={{ opacity: 0.1, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <MeetCrew />
    </motion.div>
  );
};

export default Crew;
