import { Suspense, useEffect, useState } from "react";
import { RevealFx } from "../ui/reveal";
import { Logo3dScene } from "./3dlogo";
import { Chatbox } from "./chatbox";
import { StarsIcon } from "./icons/stars";
import { Top1Icon } from "./icons/top1";
import { UpArrowIcon } from "./icons/uparrow";
import { LightRays } from "./lights";
import { motion } from "framer-motion";
import { Loading } from "./loading";

export function NewHero() {
  const [is3dClicking, set3dClicking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading)
    return (
      <>
        <Loading />
        <div className="w-full h-screen opacity-0">
          <div className="hidden md:block">
            <Logo3dScene />
          </div>
        </div>
      </>
    );

  return (
    <Suspense fallback={<div className="w-full h-screen"></div>}>
      {" "}
      <div className="w-full min-h-screen relative flex flex-col items-center justify-start pt-14 overflow-hidden">
        <RevealFx delay={0.3} className="md:hidden">
          <div className="flex items-center justify-center relative overflow-visible">
            <img
              src="/blackbox-logo-3d-compressed.png"
              width="300"
              height="300"
              loading="eager"
              className="z-10"
            />
          </div>
        </RevealFx>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`w-[250px] h-[250px] z-20 hidden md:flex ${is3dClicking ? "cursor-grabbing" : "cursor-grab"} rounded-full relative flex items-center justify-center`}
          onMouseDown={() => set3dClicking(true)}
          onMouseUp={() => set3dClicking(false)}
        >
          <Logo3dScene />
        </motion.div>

        {/* <div
        className="w-[400px] h-[400px] absolute rounded-full z-10 opacity-50"
        style={{
          background:
            "radial-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))",
          filter: "blur(100px)",
        }}
      ></div> */}

        <motion.div className="absolute -top-10 mr-32 pr-10 z-10">
          <RevealFx>
            <LightRays />
          </RevealFx>
        </motion.div>

        <div className="flex flex-col gap-2 items-center justify-center text-center -mt-4 z-0">
          <RevealFx delay={0.5}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight ">
              Build Literally Anything
            </h1>
          </RevealFx>

          <RevealFx delay={0.7}>
            <p className="opacity-80 max-w-md text-sm md:text-[1.2rem]">
              Bring all your ideas to live - just explain you want to build and
              get it ready in under 60 seconds
            </p>
          </RevealFx>
        </div>

        <Chatbox />

        <RevealFx delay={0.7}>
          <div className="w-full max-w-[90%] md:max-w-[60%] lg:max-w-[48%] flex flex-col md:flex-row gap-12 items-center justify-between mt-24 z-10">
            <div className="flex flex-col gap-3">
              <p className="text-sm">Join +10M people using BLACKBOX</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/1886440372609470464/PBm7btGO_400x400.jpg"
                    className="w-8 h-8 rounded-full object-cover border-3 border-black"
                  />

                  <img
                    src="https://pbs.twimg.com/profile_images/1886440372609470464/PBm7btGO_400x400.jpg"
                    className="w-8 h-8 rounded-full object-cover border-3 border-black -ml-3"
                  />

                  <img
                    src="https://pbs.twimg.com/profile_images/1886440372609470464/PBm7btGO_400x400.jpg"
                    className="w-8 h-8 rounded-full object-cover border-3 border-black -ml-3"
                  />

                  <img
                    src="https://pbs.twimg.com/profile_images/1886440372609470464/PBm7btGO_400x400.jpg"
                    className="w-8 h-8 rounded-full object-cover border-3 border-black -ml-3"
                  />
                </div>
                <StarsIcon />
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <Top1Icon />
                <div className="text-sm">
                  <p className="font-medium">Top #1 AI Agent</p>
                  <p className="opacity-60">SWE-Bench</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <UpArrowIcon />
                <div className="text-sm">
                  <p className="font-medium">Top 25 AI Apps</p>
                  <p className="opacity-60">In the world</p>
                </div>
              </div>
            </div>
          </div>
        </RevealFx>

        <motion.img
          initial={{ opacity: 0, translateX: 10, filter: "blur(10px)" }}
          animate={{
            opacity: 0.1,
            scale: 1,
            translateX: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 2, delay: 0.4 }}
          src="/hero-ill-c.png"
          className="opacity-50 max-w-[80%] -mt-[32%]"
        />
      </div>
    </Suspense>
  );
}
