import { Upload } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export function NewScreenshot() {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div className="w-full flex items-center justify-center z-10 md:px-12">
      <div className="w-full max-w-[90%] md:max-w-[80%] flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between h-full py-24">
        <div className="w-full lg:min-w-[45%] lg:max-w-[45%] h-full flex flex-col md:pr-10">
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight mt-6">
            Turn any Screenshot into a Functional Website
          </h2>
          <p className="mt-8 text-sm md:text-[1.2rem] opacity-70 mb-12">
            Transform any screenshot or image into a working application with
            one-click
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
            <Upload size={16} />
            Upload a screenshot
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

        <img src="/screenshot-ill.png" className="w-full lg:max-w-[50%]" />
      </div>
    </div>
  );
}
