import React, { useState } from "react";
import image_vehicle_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import image_vehicle_landscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import image_capsule_landscape from "../assets/technology/image-space-capsule-landscape.jpg";
import image_capsule_portrait from "../assets/technology/image-space-capsule-portrait.jpg";
import image_spaceport_landscape from "../assets/technology/image-spaceport-landscape.jpg";
import image_spaceport_portrait from "../assets/technology/image-spaceport-portrait.jpg";
import { AnimatePresence, motion } from "framer-motion";

const LaunchTechnology = () => {
  const [myTech, setMyTech] = useState("tech1");
  return (
    <main className="pb-10">
      <h1 className="text-center text-white flex items-center justify-center sm:justify-start sm:ml-7 lg:ml-40 lg:mb-10 gap-3 lg:text-xl">
        <span className="text-white/50">03</span> SPACE LAUNCH 101
      </h1>
      <section className="lg:flex lg:flex-row-reverse">
        <div className="mt-15 mb-10 lg:w-[40%]">
          <AnimatePresence mode="wait">
            {myTech === "tech1" && (
              <motion.div
                key={"tech1-img"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <picture>
                  <source
                    media="(min-width: 1000px"
                    srcSet={image_vehicle_portrait}
                  />
                  <source
                    media="(min-width: 648px)"
                    srcSet={image_vehicle_landscape}
                  />
                  <img
                    className="w-full h-72 sm:h-auto object-cover sm:object-contain"
                    src={image_vehicle_portrait}
                    alt="mobile vehicle"
                  />
                </picture>
              </motion.div>
            )}
            {myTech === "tech2" && (
              <motion.div
                key={"tech2-img"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <picture>
                  <source
                    media="(min-width: 1000px"
                    srcSet={image_spaceport_portrait}
                  />
                  <source
                    media="(min-width: 648px)"
                    srcSet={image_spaceport_landscape}
                  />
                  <img
                    className="w-full h-72 sm:h-auto object-cover sm:object-contain"
                    src={image_spaceport_portrait}
                    alt="mobile vehicle"
                  />
                </picture>
              </motion.div>
            )}
            {myTech === "tech3" && (
              <motion.div
                key={"tech3-img"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <picture>
                  <source
                    media="(min-width: 1000px"
                    srcSet={image_capsule_portrait}
                  />
                  <source
                    media="(min-width: 648px)"
                    srcSet={image_capsule_landscape}
                  />
                  <img
                    className="w-full h-72 sm:h-auto object-cover sm:object-contain"
                    src={image_capsule_portrait}
                    alt="mobile vehicle"
                  />
                </picture>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:w-[60%] ">
          <div className="flex lg:flex-col justify-center items-center lg:ml-auto gap-5 lg:gap-8 lg:-mr-15 z-50 my-10">
            <div
              onClick={() => setMyTech("tech1")}
              className={`w-8 cursor-pointer sm:w-12 aspect-square flex justify-center items-center border rounded-full border-white ${
                myTech === "tech1"
                  ? "bg-white text-blue900"
                  : "bg-transparent text-white"
              }`}
            >
              1
            </div>
            <div
              onClick={() => setMyTech("tech2")}
              className={`w-8 cursor-pointer sm:w-12 aspect-square flex justify-center items-center border rounded-full border-white ${
                myTech === "tech2"
                  ? "bg-white text-blue900"
                  : "bg-transparent text-white"
              }`}
            >
              2
            </div>
            <div
              onClick={() => setMyTech("tech3")}
              className={`w-8 cursor-pointer sm:w-12 aspect-square flex justify-center items-center border rounded-full border-white ${
                myTech === "tech3"
                  ? "bg-white text-blue900"
                  : "bg-transparent text-white"
              }`}
            >
              3
            </div>
          </div>
          <div className="lg:w-[80%]">
            <h2 className="text-white/50 text-center sm:text-xl lg:text-2xl lg:text-start lg:ml-28">
              THE TERMINOLOGY...
            </h2>
            <AnimatePresence mode="wait">
              {myTech === "tech1" && (
                <motion.div className="">
                  <p className="text-white text-center text-2xl my-4 sm:text-4xl lg:text-5xl lg:text-start lg:ml-28">
                    LAUNCH VEHICLE
                  </p>
                  <p className="text-blue300 text-center w-[80%] sm:w-[55%] lg:w-[63%] lg:text-start mx-auto">
                    A launch vehicle or carrier rocket is a rocket-propelled
                    vehicle used to carry a payload from Earth's surface to
                    space, usually to Earth orbit or beyond. Our WEB-X carrier
                    rocket is the most powerful in operation. Standing 150
                    metres tall, it's quite an awe-inspiring sight on the launch
                    pad!
                  </p>
                </motion.div>
              )}
              {myTech === "tech2" && (
                <motion.div className="">
                  <p className="text-white text-center text-2xl my-4 sm:text-4xl lg:text-5xl lg:text-start lg:ml-28">
                    SPACEPORT
                  </p>
                  <p className="text-blue300 text-center w-[80%] sm:w-[55%] lg:w-[60%] lg:text-start mx-auto">
                    A spaceport or cosmodrome is a site for launching (or
                    receiving) spacecraft, by analogy to the seaport for ships
                    or airport for aircraft. Based in the famous Cape Canaveral,
                    our spaceport is ideally situated to take advantage of the
                    Earth’s rotation for launch.
                  </p>
                </motion.div>
              )}
              {myTech === "tech3" && (
                <motion.div className="">
                  <p className="text-white text-center text-2xl my-4 sm:text-4xl lg:text-5xl lg:text-start lg:ml-28">
                    SPACE CAPSULE
                  </p>
                  <p className="text-blue300 text-center w-[69%] sm:w-[57%] lg:w-[60%] lg:text-start mx-auto">
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LaunchTechnology;
