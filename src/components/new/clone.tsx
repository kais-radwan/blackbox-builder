import { ChevronLeft, ChevronRight, Copy, Menu, RotateCw } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function NewClone() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div className="w-full flex items-center justify-center z-10 md:px-12">
      <div className="w-full max-w-[90%] md:max-w-[80%] flex flex-col gap-12 lg:gap-0 items-center h-full py-24">
        <div className="w-full h-full flex flex-col lg:flex-row lg:pr-10">
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight mt-6 w-full">
            Clone any Website <br />
            in <span className="opacity-70">One-Click</span>
          </h2>

          <div className="flex flex-col">
            <p className="mt-8 lg:max-w-[90%] text-sm md:text-[1.2rem] mb-10 md:min-w-sm">
              <span className="opacity-70">Pick any website and make a</span>{" "}
              pixel-perfect{" "}
              <span className="opacity-70">clone of it in seconds</span>
            </p>

            <button
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              className={cn(
                "p-2 px-4 font-medium bg-white/80 border z-20 border-white text-black rounded-lg transition-all duration-500 cursor-pointer hover:translate-y-[1px] relative overflow-hidden flex items-center gap-2 max-w-max",
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
              <Copy size={16} />
              Clone a website
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
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[20%] h-full z-20 cursor-default relative overflow-hidden p-2 lg:py-24">
          <div
            className="w-full lg:max-w-[40%] lg:min-w-[40%] bg-[#0D0C0D]/50 rounded-3xl border border-[#2D2D2D] relative flex flex-col items-center z-10 backdrop-blur-xl"
            style={{
              boxShadow: "0px 0px 0px 6px #121212, 0px 0px 0px 7px #2f2f2f",
            }}
          >
            <div className="absolute -right-2 h-[90%] top-[5%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent hidden lg:flex"></div>
            <div className="absolute -bottom-2 w-[90%] left-[5%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent lg:hidden"></div>

            <div className="w-full flex items-center gap-4 justify-start p-4 px-6">
              <div className="flex items-center gap-2 opacity-70">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>

              <RotateCw size={16} className="opacity-70 hidden md:flex" />

              <div className="w-full p-2 px-4 bg-white/5 border border-[#2D2D2D] rounded-full text-sm">
                <p className="opacity-70">https://vercel.com</p>
              </div>

              <Menu size={16} className="opacity-70" />
            </div>

            <img
              src="/vercel-original.png"
              className="w-full h-full rounded-b-3xl"
            />
          </div>

          <video
            autoPlay
            playsInline
            loop
            muted
            className="w-full lg:max-w-[50%] absolute rotate-[90deg] lg:rotate-0"
          >
            <source src="/moving-rays.webm" />
          </video>

          <div
            className="w-full lg:max-w-[40%] lg:min-w-[40%] bg-[#0D0C0D]/50 rounded-3xl border border-[#2D2D2D] relative flex flex-col items-center z-10 mt-24 lg:mt-0 backdrop-blur-2xl"
            style={{
              boxShadow: "0px 0px 0px 6px #121212, 0px 0px 0px 7px #2f2f2f",
            }}
          >
            <div className="absolute -left-2 h-[90%] top-[5%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent hidden lg:flex"></div>
            <div className="absolute -top-2 w-[90%] left-[5%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent lg:hidden"></div>

            <div className="w-full flex items-center gap-4 justify-start p-4 px-6">
              <div className="hidden md:flex items-center gap-2 opacity-70">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
              </div>

              <RotateCw size={16} className="opacity-70 hidden md:flex" />

              <div className="w-full p-2 px-4 bg-white/5 border border-[#2D2D2D] rounded-full text-sm">
                <p className="opacity-70">
                  https://
                  <span className="text-[#2B67FF] font-medium">
                    your-project
                  </span>
                  .blackbox.ai
                </p>
              </div>

              <Menu size={16} className="opacity-70 hidden md:flex" />
            </div>

            <img
              src="/vercel-cloned.png"
              className="w-full h-full rounded-b-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
