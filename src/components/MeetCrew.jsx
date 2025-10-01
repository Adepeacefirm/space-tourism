import React, { useState } from "react";
import image_douglas from "../assets/crew/image-douglas-hurley.png";
import image_mark from "../assets/crew/image-mark-shuttleworth.png";
import image_victor from "../assets/crew/image-victor-glover.png";
import image_anousheh from "../assets/crew/image-anousheh-ansari.png";

const MeetCrew = () => {
  const [selectCrew, setSelectCrew] = useState("crew1");
  return (
    <main className="pb-20">
      <h1 className="text-center text-white flex items-center justify-center sm:justify-start sm:ml-7 lg:ml-40 lg:mb-10 gap-3 lg:text-xl">
        <span className="text-white/50">02</span>MEET YOUR CREW
      </h1>
      <section className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 lg:gap-0">
        <div className="flex flex-col gap-7 lg:gap-20 mt-5 lg:w-[50%]">
          <div className="my-5">
            {selectCrew === "crew1" && (
              <div>
                <h1 className="text-center text-white/40 text-lg sm:text-2xl lg:text-3xl lg:text-start lg:ml-38">
                  COMMANDER
                </h1>
                <h2 className="text-center text-white text-2xl sm:text-4xl lg:text-5xl my-1 lg:ml-20">
                  DOUGLAS HURLEY
                </h2>
                <p className="text-center w-[80%] mx-auto text-blue300 my-5 sm:w-[60%] lg:w-[70%] sm:mx-auto lg:text-start lg:ml-38">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
            )}
            {selectCrew === "crew2" && (
              <div>
                <h1 className="text-center text-white/40 text-lg sm:text-2xl lg:text-3xl lg:text-start lg:ml-38">
                  MISSION SPECIALIST
                </h1>
                <h2 className="text-center lg:text-start text-white text-2xl sm:text-4xl lg:text-5xl my-1 lg:ml-38">
                  MARK SHUTTLEWORTH
                </h2>
                <p className="text-center w-[84%] mx-auto text-blue300 my-5 sm:w-[60%] lg:w-[65%] sm:mx-auto lg:text-start lg:ml-38">
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </p>
              </div>
            )}
            {selectCrew === "crew3" && (
              <div>
                <h1 className="text-center text-white/40 text-lg sm:text-2xl lg:text-3xl lg:text-start lg:ml-38">
                  PILOT
                </h1>
                <h2 className="text-center lg:text-start text-white text-2xl sm:text-4xl lg:text-5xl my-1 lg:ml-38">
                  VICTOR GLOVER
                </h2>
                <p className="text-center w-[75%] mx-auto text-blue300 my-5 sm:w-[60%] lg:w-[68%] sm:mx-auto lg:text-start lg:ml-38">
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the International Space Station. Glover is a
                  commander in the U.S. Navy where he pilots an F/A-18.He was a
                  crew member of Expedition 64, and served as a station systems
                  flight engineer.
                </p>
              </div>
            )}
            {selectCrew === "crew4" && (
              <div>
                <h1 className="text-center text-white/40 text-lg sm:text-2xl lg:text-3xl lg:text-start lg:ml-38">
                  FLIGHT ENGINEER
                </h1>
                <h2 className="text-center lg:text-start text-white text-2xl sm:text-4xl lg:text-5xl my-1 lg:ml-38">
                  ANOUSHEH ANSARI
                </h2>
                <p className="text-center w-[80%] mx-auto text-blue300 my-5 sm:w-[57%] lg:w-[68%] sm:mx-auto lg:text-start lg:ml-38">
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and
                  the first Iranian in space.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 lg:ml-38">
            <div
              onClick={() => setSelectCrew("crew1")}
              className={`w-2 aspect-square rounded-full ${
                selectCrew === "crew1" ? "bg-white" : "bg-white/20"
              }`}
            ></div>
            <div
              onClick={() => setSelectCrew("crew2")}
              className={`w-2 aspect-square rounded-full ${
                selectCrew === "crew2" ? "bg-white" : "bg-white/20"
              }`}
            ></div>
            <div
              onClick={() => setSelectCrew("crew3")}
              className={`w-2 aspect-square rounded-full ${
                selectCrew === "crew3" ? "bg-white" : "bg-white/20"
              }`}
            ></div>
            <div
              onClick={() => setSelectCrew("crew4")}
              className={`w-2 aspect-square rounded-full ${
                selectCrew === "crew4" ? "bg-white" : "bg-white/20"
              }`}
            ></div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          {selectCrew === "crew1" && (
            <div className="relative lg:-ml-30">
              <img
                className="w-[60%] sm:w-[50%] lg:w-[45%] mx-auto"
                src={image_douglas}
                alt="Douglas Image"
              />
              <div className="absolute bg-gradient-to-t from-blue900 to-transparent w-full h-32 bottom-0 left-0"></div>
            </div>
          )}
          {selectCrew === "crew2" && (
            <div className="relative lg:-ml-30">
              <img
                className="w-[60%] sm:w-[50%] lg:w-[45%] mx-auto"
                src={image_mark}
                alt="MArk Image"
              />
              <div className="absolute bg-gradient-to-t from-blue900 to-transparent w-full h-32 bottom-0 left-0"></div>
            </div>
          )}
          {selectCrew === "crew3" && (
            <div className="relative lg:-ml-30">
              <img
                className="w-[60%] sm:w-[50%] lg:w-[45%] mx-auto"
                src={image_victor}
                alt="MArk Image"
              />
              <div className="absolute bg-gradient-to-t from-blue900 to-transparent w-full h-32 bottom-0 left-0"></div>
            </div>
          )}
          {selectCrew === "crew4" && (
            <div className="relative lg:-ml-30">
              <img
                className="w-[60%] sm:w-[50%] lg:w-[45%] mx-auto"
                src={image_anousheh}
                alt="MArk Image"
              />
              <div className="absolute bg-gradient-to-t from-blue900 to-transparent w-full h-32 bottom-0 left-0"></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MeetCrew;
