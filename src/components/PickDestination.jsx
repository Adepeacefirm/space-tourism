import React, { useState } from "react";
import image_moon from "../assets/destination/image-moon.png";
import image_mars from "../assets/destination/image-mars.png";
import image_europa from "../assets/destination/image-europa.png";
import image_titan from "../assets/destination/image-titan.png";
import { NavLink } from "react-router-dom";

const PickDestination = () => {
  const [myDestination, setMyDestination] = useState("moon");
  return (
    <main className="pb-12">
      <h1 className="text-center text-white flex items-center justify-center sm:justify-start sm:ml-7 lg:ml-40 lg:mb-10 gap-3">
        <span className="text-white/50">01</span>PICK YOUR DESTINATION
      </h1>
      <section className="lg:flex lg:w-[70%] lg:mx-auto lg:items-center">
        <div className="lg:w-[50%]">
          {myDestination === "moon" && (
            <img
              className="w-[35%] lg:w-[80%] mx-auto my-10 sm:my-15"
              src={image_moon}
              alt="Moon Image"
            />
          )}
          {myDestination === "mars" && (
            <img
              className="w-[35%] lg:w-[80%] mx-auto my-10 sm:my-15"
              src={image_mars}
              alt="Mars Image"
            />
          )}
          {myDestination === "europa" && (
            <img
              className="w-[35%] lg:w-[80%] mx-auto my-10 sm:my-15"
              src={image_europa}
              alt="Europa Image"
            />
          )}
          {myDestination === "titan" && (
            <img
              className="w-[35%] lg:w-[80%] mx-auto my-10 sm:my-15"
              src={image_titan}
              alt="Titan Image"
            />
          )}
        </div>
        <div className="lg:w-[50%]">
          <nav className="flex justify-center lg:justify-start lg:ml-12 items-center gap-5 text-white">
            <NavLink
              onClick={() => setMyDestination("moon")}
              className={`pb-2 cursor-pointer hover:border-b-2 hover:border-b-white/50 ${
                myDestination === "moon" ? "border-b-2 border-b-white" : ""
              }`}
            >
              MOON
            </NavLink>
            <NavLink
              className={`pb-2 cursor-pointer hover:border-b-2 hover:border-b-white/50 ${
                myDestination === "mars" ? "border-b-2 border-b-white" : ""
              }`}
              onClick={() => setMyDestination("mars")}
            >
              MARS
            </NavLink>
            <NavLink
              className={`pb-2 cursor-pointer hover:border-b-2 hover:border-b-white/50 ${
                myDestination === "europa" ? "border-b-2 border-b-white" : ""
              }`}
              onClick={() => setMyDestination("europa")}
            >
              EUROPA
            </NavLink>
            <NavLink
              className={`pb-2 cursor-pointer hover:border-b-2 hover:border-b-white/50 ${
                myDestination === "titan" ? "border-b-2 border-b-white" : ""
              }`}
              onClick={() => setMyDestination("titan")}
            >
              TITAN
            </NavLink>
          </nav>
          {myDestination === "moon" && (
            <section className="w-[80%] mx-auto text-white">
              <div>
                <h1 className="text-center lg:text-start text-4xl sm:text-7xl lg:text-8xl my-7">
                  MOON
                </h1>
                <p className="text-center text-white/70 sm:w-[73%] lg:w-[95%] lg:text-start sm:mx-auto">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div className="h-[1px] w-full bg-white/20 my-7"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center text-center gap-7 sm:gap-25">
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    AVG. DISTANCE
                  </p>
                  <p className="text-3xl lg:text-2xl mt-1">384,400 KM</p>
                </div>
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    EST. TRAVEL TIME
                  </p>
                  <p className="text-3xl lg:text-2xl mt-1">3 DAYS</p>
                </div>
              </div>
            </section>
          )}
          {myDestination === "mars" && (
            <section className="w-[80%] mx-auto text-white">
              <div>
                <h1 className="text-center lg:text-start text-4xl sm:text-7xl lg:text-8xl my-7">
                  MARS
                </h1>
                <p className="text-center text-white/70 sm:w-[75%] lg:w-[100%] lg:text-start sm:mx-auto">
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>
                <div className="h-[1px] w-full bg-white/20 my-7"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center text-center gap-7 sm:gap-25">
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    AVG. DISTANCE
                  </p>
                  <p className="text-3xl lg:text-xl mt-1">225 MIL. KM</p>
                </div>
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    EST. TRAVEL TIME
                  </p>
                  <p className="text-3xl lg:text-xl mt-1">9 MONTHS</p>
                </div>
              </div>
            </section>
          )}
          {myDestination === "europa" && (
            <section className="w-[80%] mx-auto text-white">
              <div>
                <h1 className="text-center lg:text-start text-4xl sm:text-7xl lg:text-8xl my-7">
                  EUROPA
                </h1>
                <p className="text-center text-white/70 sm:w-[70%] lg:w-[100%] lg:text-start sm:mx-auto">
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </p>
                <div className="h-[1px] w-full bg-white/20 my-7"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center text-center gap-7 sm:gap-25">
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    AVG. DISTANCE
                  </p>
                  <p className="text-3xl lg:text-xl mt-1">628 MIL. KM</p>
                </div>
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    EST. TRAVEL TIME
                  </p>
                  <p className="text-3xl lg:text-xl mt-1">3 YEARS</p>
                </div>
              </div>
            </section>
          )}
          {myDestination === "titan" && (
            <section className="w-[80%] mx-auto text-white">
              <div>
                <h1 className="text-center lg:text-start text-4xl sm:text-7xl lg:text-8xl my-7">
                  TITAN
                </h1>
                <p className="text-center text-white/70 sm:w-[72%] lg:w-[100%] lg:text-start sm:mx-auto">
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
                <div className="h-[1px] w-full bg-white/20 my-7"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center text-center gap-7 sm:gap-25">
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    AVG. DISTANCE
                  </p>
                  <p className="text-3xl lg:text-xl mt-1">1.6 BIL. KM</p>
                </div>
                <div>
                  <p className="text-sm lg:text-xs text-white/70 lg:text-start">
                    EST. TRAVEL TIME
                  </p>
                  <p className="text-3xl lg:text-xl mt-1">7 YEARS</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default PickDestination;
