import { ArrowUpRight, ChevronRight, Figma, ImageUp } from "lucide-react";
import RotatingText from "../ui/rotating-text";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function Chatbox() {
  const [msg, setMsg] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] p-3 bg-black/3 border border-white/15 rounded-3xl mt-12 z-30 flex flex-col gap-4 items-center justify-center"
      style={{
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="flex items-center justify-center w-full relative p-[1px] overflow-hidden rounded-2xl">
        {/** chatbox */}
        <div className="w-full h-41 bg-[#0D0C0D] border border-white/30 rounded-2xl z-10 flex flex-col justify-between p-4 md:p-6 pb-4">
          <div className="flex items-center gap-4 w-full">
            <div className="min-w-10 max-w-10 min-h-10 max-h-10 bg-black rounded-full relative overflow-hidden border border-white/60 flex items-center justify-center">
              {/* <img src="/ai-gradient.gif" className="absolute h-full w-full" /> */}
              <video
                autoPlay
                loop
                playsInline
                className="w-full h-[150%] absolute z-10 -bottom-3"
              >
                <source src="/ai-gradient.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full flex items-center relative">
              <input
                autoFocus
                className="z-10 outline-none"
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <div
                className={cn(
                  "w-full flex items-center gap-1 absolute z-0 transition-all duration-700",
                  msg ? "-translate-y-10" : "opacity-100",
                )}
                style={msg ? { filter: "blur(40px)" } : {}}
              >
                <p className="text-sm opacity-70 -mt-1 min-w-max">
                  Ask BLACKBOX to{" "}
                  <span className="md:hidden">build anything</span>
                </p>
                <div className="w-full truncate min-w-max max-w-[90%] overflow-hidden">
                  <RotatingText
                    texts={[
                      "build you a landing page",
                      "implement a Figma design",
                      "clone a website",
                      "build you a dashboard",
                    ]}
                    staggerFrom={"first"}
                    initial={{ y: "100%" }}
                    className="min-w-max hidden md:flex"
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 "
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={4000}
                  />
                </div>
              </div>
            </div>
          </div>

          {/** chatbox bottom bar */}
          <div className="flex items-center text-sm justify-between">
            <div className="flex items-center gap-5">
              <button className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 rounded-xl transition-all">
                <Figma size={16} className="text-[#1ABCFE]" />
                <p className="bg-gradient-to-l from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] text-transparent bg-clip-text">
                  Import
                </p>
              </button>

              <button className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 rounded-xl transition-all">
                <ImageUp size={16} />
                Attach
              </button>
            </div>

            <div
              className="absolute bottom-0.5 right-0.5 border-t border-l p-2 px-5 border-white/30 flex items-center gap-2 rounded-tl-2xl cursor-pointer transition-all font-medium bg-white/4 hover:bg-white/5 group"
              style={{
                boxShadow: "inset 2px 4px 4px 0px rgba(0, 0, 0, .38)",
              }}
            >
              <p className="opacity-80 group-hover:opacity-100 transition-all">
                Build it
              </p>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/** border beam */}
        <div className="opacity-0 absolute animate-spin"></div>
        <div
          className="absolute w-full h-[50%] scale-150 bg-gradient-to-r from-white via-transparent to-transparent rounded-2xl"
          style={{
            animation: "spin 10s linear infinite",
          }}
        ></div>

        <div
          className="absolute w-full h-[50%] scale-150 bg-gradient-to-r from-white via-transparent to-transparent rounded-2xl"
          style={{
            animation: "spin 10s linear infinite",
            filter: "blur(10px)",
          }}
        ></div>
      </div>

      <a
        href="/"
        className="text-xs flex items-center gap-2 opacity-80 hover:opacity-100 transition-all"
      >
        Browse examples you can build with BLACKBOX
        <ChevronRight size={16} />
      </a>
    </motion.div>
  );
}
