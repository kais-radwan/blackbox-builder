import ImageTrail from "./ui/image-tail";
import { motion } from "framer-motion";

export function Screenshots() {
  return (
    <div className="w-full border-b flex items-center justify-center border-[#222] relative h-[80vh]">
      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm opacity-60 z-20"
        >
          (hover me and see)
        </motion.p>
        <div className="relative flex items-center justify-center">
          <motion.h2
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight z-20"
          >
            Turn Any <span className="text-[#F24E1E]">Screenshot</span>{" "}
            <span className="text-[#FFD322]">Into</span> a Functional{" "}
            <span className="text-[#0ACF83]">Website</span>
          </motion.h2>

          <motion.h2
            initial={{ filter: "blur(40px)", opacity: 0 }}
            whileInView={{ filter: "blur(200px)", opacity: 1, translateY: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight z-20 absolute"
          >
            Turn Any <span className="text-[#F24E1E]">Screenshot</span>{" "}
            <span className="text-[#FFD322]">Into</span> a Functional{" "}
            <span className="text-[#0ACF83]">Website</span>
          </motion.h2>
        </div>
        <div
          style={{
            width: "100%",
            height: "500px",
            position: "absolute",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <ImageTrail
            items={["/cod.png", "/spotify-app.png", "/yt.png", "/brain.png"]}
            variant={1}
          />
        </div>
      </div>
    </div>
  );
}
