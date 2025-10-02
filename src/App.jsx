import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { AnimatePresence } from "framer-motion";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { activePage } = useContext(AppContext);
  const backgrounds = {
    home: "bg-[url('/background-home-mobile.jpg')] sm:bg-[url('/background-home-tablet.jpg')] lg:bg-[url('/background-home-desktop.jpg')]",
    crew: "bg-[url('/background-crew-mobile.jpg')] sm:bg-[url('/background-crew-tablet.jpg')] lg:bg-[url('/background-crew-desktop.jpg')]",
    destination:
      "bg-[url('/background-destination-mobile.jpg')] sm:bg-[url('/background-destination-tablet.jpg')] lg:bg-[url('/background-destination-desktop.jpg')]",
    technology:
      "bg-[url('/background-technology-mobile.jpg')] sm:bg-[url('/background-technology-tablet.jpg')] lg:bg-[url('/background-technology-desktop.jpg')] ",
  };

  return (
    <div
      className={`${backgrounds[activePage]} bg-cover bg-center transition-all duration-500`}
    >
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
};

export default App;
