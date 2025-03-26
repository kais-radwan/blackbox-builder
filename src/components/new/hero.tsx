import { RevealFx } from "../ui/reveal";
import { Chatbox } from "./chatbox";
import { StarsIcon } from "./icons/stars";
import { Top1Icon } from "./icons/top1";
import { UpArrowIcon } from "./icons/uparrow";
import { LightRays } from "./lights";
import { motion } from "framer-motion";

export function NewHero() {
  return (
    <div className="w-full relative flex flex-col items-center justify-start pt-14 overflow-hidden border-b border-white/20">
      <RevealFx delay={0.3}>
        <div className="flex items-center justify-center relative overflow-visible">
          <img
            src="/blackbox-logo-3d.png"
            width="300"
            height="300"
            loading="eager"
            className="z-10"
          />
        </div>
      </RevealFx>

      <div
        className="w-[400px] h-[400px] absolute rounded-full blur-3xl z-10 opacity-50"
        style={{
          background:
            "radial-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))",
        }}
      ></div>

      <motion.div className="absolute -top-10 mr-32 pr-10">
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

      <RevealFx delay={0.3} translateY={2} speed="slow" className="h-full -mt-[30%]">
        <motion.img
          initial={{ opacity: 0, translateX: 10 }}
          animate={{ opacity: 0.1, scale: 1, translateX: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          src="/hero-ill-c.png"
          className="opacity-50 max-w-[80%] md:block z-0"
        />
      </RevealFx>
    </div>
  );
}
