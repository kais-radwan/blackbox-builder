import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { RevealFx } from "./ui/reveal";

export function Hero() {
  return (
    <div className="w-full flex flex-col items-center pt-20 h-screen overflow-hidden md:overflow-visible relative">
      <motion.div
        className="flex flex-col w-full items-center justify-center gap-12 z-10"
        style={{
          willChange: "transform",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-2 z-10 pt-10">
          <RevealFx delay={0} translateY={1} speed="medium">
            <h1 className="text-4xl md:text-5xl font-semibold w-full leading-tight">
              Just Build it with <br />
              BLACKBOX AI
            </h1>
          </RevealFx>

          <RevealFx delay={0.3} translateY={1} speed="medium">
            <motion.p className="text-sm md:text-md opacity-90 max-w-md md:max-w-xl">
              Build and ship Full-stack projects at lightning speed without
              writing a single line of code
            </motion.p>
          </RevealFx>

          <div className="flex items-center justify-center gap-2 my-4 z-20">
            <RevealFx delay={0.7} speed="medium">
              <button className="font-semibold p-3 px-6 bg-white text-black text-sm cursor-pointer hover:opacity-80 transition-all duration-500 min-w-max">
                Start building
              </button>
            </RevealFx>

            <RevealFx delay={1.2} speed="medium">
              <button className="font-semibold p-3 px-6 bg-[#151515] text-sm cursor-pointer hover:bg-[#212121] transition-all duration-500 min-w-max">
                Watch video
              </button>
            </RevealFx>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[330px] md:w-[450px] p-4 px-6 bg-[#080808] border border-[#414141] flex items-center justify-center z-10 absolute -bottom-28"
        >
          <input
            placeholder="What do you want to build today?"
            className="bg-transparent text-sm outline-none max-w-none w-full"
            autoFocus
          />
          <button
            className="min-w-10 max-w-10 min-h-10 max-h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, .5)",
            }}
          >
            <Sparkles size={18} />
          </button>
        </motion.div>
      </motion.div>

      <div className="flex-col absolute bottom-4 z-20 items-center animate-pulse hidden">
        <span>Keep scrolling</span>
        <ChevronDown />
      </div>

      <RevealFx delay={0.3} translateY={2} speed="slow">
        <motion.img
          initial={{ opacity: 0, translateX: 10 }}
          animate={{ opacity: 0.7, scale: 1, translateX: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          src="/hero-ill-c.png"
          className="opacity-50 max-w-[80%] hidden md:block"
        />
      </RevealFx>

      <motion.img
        initial={{ opacity: 0, translateX: 10 }}
        animate={{ opacity: 0.2, scale: 1, translateX: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
        src="/hero-ill.png"
        className="opacity-20 absolute top-56 md:top-42 min-h-[80%] min-w-[140%] md:hidden"
      />
    </div>
  );
}
