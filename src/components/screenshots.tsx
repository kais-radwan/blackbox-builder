import { motion } from "framer-motion";
import GridMotion from "./ui/grid-motion";

const items: unknown[] = [
  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",

  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",

  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",

  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",

  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",

  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",

  "https://blackbox-builder.vercel.app/cod.png",
  "https://blackbox-builder.vercel.app/spotify-app.png",
  "https://blackbox-builder.vercel.app/yt.png",
  "https://blackbox-builder.vercel.app/tesla-page.png",
];

export function Screenshots() {
  return (
    <div className="w-full border-b flex items-center justify-center border-[#222] relative h-[80vh] mt-24 border-t">
      <div className="w-full min-w-[90%] md:min-w-[80%] md:max-w-[80%] flex flex-col items-center justify-center text-center">
        <div className="relative flex items-center justify-center">
          <motion.h2
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, translateY: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight z-20"
          >
            Turn Any <span className="gradientText">Screenshot</span>{" "}
            <span className="gradientText">Into</span> a Functional{" "}
            <span className="gradientText">Website</span>
          </motion.h2>

          <motion.h2
            initial={{ filter: "blur(40px)", opacity: 0 }}
            whileInView={{ filter: "blur(200px)", opacity: 1, translateY: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight z-20 absolute"
          >
            Turn Any <span className="gradientText">Screenshot</span>{" "}
            <span className="gradientText">Into</span> a Functional{" "}
            <span className="gradientText">Website</span>
          </motion.h2>
        </div>
        {/* <div
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
        </div> */}
        <div className="absolute w-full h-full top-0 left-0 opacity-20">
          {/** @ts-expect-error no need for */}
          <GridMotion items={items} />
        </div>
      </div>
    </div>
  );
}
