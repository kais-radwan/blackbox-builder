import { Figma, Frame, MousePointer2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function NewFigma() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div className="w-full flex items-center justify-center z-10 md:px-12">
      <div className="w-full max-w-[90%] md:max-w-[80%] flex flex-col lg:flex-row gap-12 lg:gap-0 items-center h-full py-24">
        <div className="w-full lg:min-w-[45%] lg:max-w-[45%] h-full flex flex-col md:pr-10">
          <div className="flex items-center w-full pl-2">
            <div
              className="w-4 h-4 bg-white rounded-full"
              style={{
                boxShadow:
                  "0px 0px 0px 5px rgba(255, 255, 255, 0.1), 0px 0px 0px 8px rgba(255, 255, 255, 0.1)",
              }}
            ></div>
            <div className="w-36 bg-gradient-to-r from-white to-transparent h-[1.5px]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight mt-6">
            Figma to Live <br />
            Website in Seconds
          </h2>
          <p className="mt-8 lg:max-w-[90%] text-sm md:text-[1.2rem] opacity-70 mb-12">
            No waiting. No code. No workarounds.
            <br />
            <br />
            Just upload your figma file and watch BLACKBOX build it for you in
            seconds
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
            <Figma size={16} />
            Get yours built now
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

        <div className="w-full flex flex-col items-center justify-center h-full z-20 cursor-default relative overflow-hidden p-2 pb-24">
          <div
            className="w-full bg-black rounded-3xl h-[26.438rem] border border-[#2D2D2D] relative pl-[7rem] md:pl-[10rem] flex items-center justify-center z-10 px-4 md:px-0"
            style={{
              boxShadow: "0px 0px 0px 6px #121212, 0px 0px 0px 7px #2f2f2f",
            }}
          >
            <div className="absolute p-2 pt-4 md:p-4 top-0 left-0 text-[9px] md:text-[12px] rounded-l-3xl bg-[#131313] border-r border-white/10 h-full w-[6rem] md:w-[10rem] flex flex-col gap-6">
              <Figma size={32} className="opacity-70" />
              <div className="flex flex-col w-full gap-3">
                <div className="opacity-60">Layers</div>
                <div className="flex flex-col w-full gap-2">
                  <div className="p-2 py-1 overflow-hidden w-full bg-blue-400/10 rounded-lg flex items-center gap-2">
                    <Frame size={14} className="hidden md:flex" />
                    <div className="min-w-max">Landing Page</div>
                  </div>

                  <div className="p-2 py-1 w-full rounded-lg flex items-center gap-2">
                    <Frame size={14} className="hidden md:flex" />
                    <div>Blog Page</div>
                  </div>

                  <div className="p-2 py-1 w-full rounded-lg flex items-center gap-2">
                    <Frame size={14} className="hidden md:flex" />
                    <div>Pricing Page</div>
                  </div>

                  <div className="p-2 py-1 w-full rounded-lg flex items-center gap-2">
                    <Frame size={14} className="hidden md:flex" />
                    <div>Signup Page</div>
                  </div>
                </div>
              </div>
            </div>

            <MousePointer2 className="absolute bottom-24 right-20 md:right-32" />

            <div className="w-full h-full flex flex-col justify-between items-center pt-24 pb-4">
              <div className="flex flex-col gap-1 items-center justify-center relative">
                <p className="w-full text-left text-[10px] text-blue-300/80">
                  Landing Page
                </p>
                <img src="/iphone-figma.png" width="350" />
              </div>
              <img src="/figma-bar.png" width="350" />
            </div>

            <div className="absolute -bottom-2 w-[90%] left-[5%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          <video
            autoPlay
            playsInline
            loop
            muted
            src="/beam-thick-3.webm"
            className="mt-12 md:mt-36 absolute z-0"
            style={{ filter: "blur(60px)" }}
          ></video>
          <div className="w-full flex items-center justify-center relative">
            <video
              autoPlay
              playsInline
              loop
              muted
              src="/beam-thick-3.webm"
              className="-mt-36 md:-mt-56 z-0 w-full min-w-[120%] md:min-w-full"
            ></video>
          </div>

          <div
            className="w-full p-4 px-6 bg-[#0D0C0D] border border-[#2D2D2D] rounded-2xl flex items-center gap-3 z-10 relative"
            style={{
              boxShadow: "0px 0px 0px 6px #121212, 0px 0px 0px 7px #2f2f2f",
            }}
          >
            <div className="absolute -top-2 w-[90%] left-[5%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="flex items-center justify-center relative">
              <div
                className="w-3 h-3 rounded-full bg-[#00FFB2] z-10"
                style={{ boxShadow: "0px 0px 4px 0px #00FFB2" }}
              ></div>

              <div
                className="w-3 h-3 rounded-full bg-[#00FFB2] z-0 opacity-50 animate-ping absolute"
                style={{ boxShadow: "0px 0px 4px 0px #00FFB2" }}
              ></div>
            </div>

            <p className="text-xs md:text-base">
              https://
              <span className="text-[#484848] font-bold">your-project</span>
              .blackbox.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
