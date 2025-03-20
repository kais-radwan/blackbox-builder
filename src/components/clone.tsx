import { ArrowUpRight } from "lucide-react";
import { RevealFx } from "./ui/reveal";
import { motion } from "framer-motion";

export function Clone() {
  return (
    <div className="w-full mt-46 border-b flex items-center justify-center border-[#222] relative">
      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight"
        >
          <span className="text-[#6D7BB6]">Clone</span> Any{" "}
          <span className="text-[#6D7BB6]">Website</span> in One-Click
        </motion.h2>

        <motion.img
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          src="/clone-visual.png"
          className="min-w-[125%] md:min-w-full"
          loading="lazy"
        />

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-[rgba(0, 0, 0, 0)] to-[#263078]/30"></div>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 5 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-20 left-48 hidden md:flex"
        >
          <RevealFx>
            <div className="p-3 text-sm flex items-center justify-center bg-black border-[#333333] border">
              <p className="w-48 text-left">Clone apple.com</p>
              <div className="size-7 bg-white flex items-center justify-center text-black">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </RevealFx>
        </motion.div>
      </div>

      <motion.div
        initial={{
          filter: "blur(10px)",
          opacity: 0,
          translateY: 5,
          translateX: -15,
        }}
        whileInView={{
          filter: "blur(0px)",
          opacity: 1,
          translateY: 0,
          translateX: 0,
        }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-68 right-86 hidden md:flex"
      >
        <RevealFx>
          <div className="p-3 text-sm flex items-center justify-center bg-black border-[#333333] border">
            <p className="w-48 text-left">Clone tesla.com</p>
            <div className="size-7 bg-white flex items-center justify-center text-black">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </RevealFx>
      </motion.div>
    </div>
  );
}
