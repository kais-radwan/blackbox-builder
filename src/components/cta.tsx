import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center relative overflow-hidden h-screen text-center">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-2"
        >
          Time to <span className="text-[#6D7BB6]">Transform</span> How You
          Build
        </motion.h2>

        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, translateY: 2 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="text-md text-gray-400 mb-10 max-w-lg mx-auto"
        >
          Join millions of developers who are already building faster and
          smarter with BLACKBOX AI
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="group flex items-center gap-2 font-semibold p-4 px-8 bg-white text-black text-sm hover:opacity-80 transition-all duration-500 cursor-pointer">
            Get Started Free
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#6D7BB6] rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#263078] rounded-full filter blur-[100px]"></div>
      </motion.div>
    </div>
  );
}
