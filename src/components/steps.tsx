import { motion } from "framer-motion";

export function Steps() {
  return (
    <div className="w-full mt-46 border-b flex items-start justify-center border-[#222] relative overflow-hidden">
      <div
        ref={revealRef}
        className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center"
      >
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md mb-12 leading-tight"
        >
          Build Whatever You Want
        </motion.h2>
        <motion.img
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          src="/builder-steps.png"
          className="min-w-[125%] md:min-w-[80%] md:w-[80%] border-r border-[#222] -mb-10"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-[rgba(0, 0, 0, 0)] to-white/5"></div>
      </div>
    </div>
  );
}
