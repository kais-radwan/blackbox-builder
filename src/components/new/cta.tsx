import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { ChevronRight } from "lucide-react";

export function NewCTA() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-12 py-24 md:pb-0 text-center overflow-hidden max-h-[40rem] lg:max-h-screen relative border-y border-white/20">
      <div
        className="w-96 h-96 absolute bg-[#39406B] rounded-full z-30 -bottom-32"
        style={{ filter: "blur(200px)" }}
      ></div>

      <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight z-10">
        Time to Transform
        <br />
        How You Build
      </h2>

      <button
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        className={cn(
          "p-2 px-4 min-h-max min-w-max font-medium bg-white/80 border z-30 border-white text-black rounded-lg transition-all duration-500 cursor-pointer hover:translate-y-[1px] relative overflow-hidden flex items-center gap-2 max-w-max",
        )}
        style={
          !buttonHovered
            ? {
                boxShadow: "0px 4px 0px 0px rgba(255, 255, 255, 0.2)",
                transition: "box-shadow 0.2s",
              }
            : {
                boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.2)",
                transition: "box-shadow 0.2s",
              }
        }
      >
        Start building
        <ChevronRight className="h-4 w-4" />
        <motion.div
          initial={{ x: -50, opacity: 0, filter: "blur(20px)" }}
          animate={
            buttonHovered
              ? { x: 0, opacity: 0.7, filter: "blur(5px)" }
              : { x: -50, opacity: 0, filter: "blur(20px)" }
          }
          transition={{ duration: 0.5 }}
          className="h-64 absolute -top-10 rotate-12 bg-white blur-sm w-4"
        ></motion.div>
      </button>

      <video
        src="/hand-animation-small.webm"
        autoPlay
        muted
        loop
        className="w-full z-0 -mt-10 md:-mt-32 lg:-mt-40 hidden md:flex"
      ></video>

      <div className="w-[70%] h-64 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-[15%] z-20"></div>
    </div>
  );
}
