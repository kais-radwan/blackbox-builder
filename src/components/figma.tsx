import { ArrowDown, ArrowRight, Link } from "lucide-react";
import { motion } from "framer-motion";

export function Figma() {
  return (
    <div className="w-full mt-46 border-b flex items-center justify-center border-[#222] relative overflow-hidden">
      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center gap-14 relative">
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight"
        >
          Go From <span className="gradientText">Figma to Live Website</span> in
          Seconds
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative overflow-visible"
          >
            <img
              src="/figma-file-frame.png"
              className="w-32 md:w-40 z-10"
              loading="lazy"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120vw" }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute flex flex-col gap-10 w-[100vw] md:w-[120vw] ml-0 md:ml-[50vw] z-0"
            >
              <div className="w-full border-t z-0 border-[#222]"></div>
              <div className="w-full border-t z-0 border-[#222]"></div>
            </motion.div>

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100vh" }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="absolute h-[100vh] border-r z-0 border-[#222] hidden md:block"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0, 1] }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ArrowRight className="opacity-70 hidden md:block" />
          </motion.div>
          <ArrowDown className="opacity-70 md:hidden" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, diration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col border border-[#222] z-10 relative overflow-visible"
          >
            <div className="flex items-center gap-2 text-sm p-2 border-b border-[#222] bg-[#090909] z-10">
              <Link size={16} />
              <p>
                https://<span className="opacity-60">your-project</span>
                .blackbox.ai
              </p>
            </div>

            <motion.img
              src="tesla-page.png"
              width="550"
              className="z-10"
              loading="lazy"
            />

            <motion.div className="h-[100vh] -top-[70%] right-14 border-r border-[#222] absolute z-0 hidden md:block"></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
