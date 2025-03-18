import { ChevronDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import BlurText from "./ui/blur-text";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Calculate the scroll boundaries
  const [yStart, setYStart] = useState(0);
  const [yEnd, setYEnd] = useState(0);
  // const [inputPlaceholder, setInputPlaceholder] = useState("");

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const updateBoundaries = () => {
      const containerTop = containerRef.current?.offsetTop ?? 0;
      const containerHeight = containerRef.current?.offsetHeight ?? 0;
      const stickyHeight = stickyRef.current?.offsetHeight ?? 0;

      setYStart(containerTop - 80); // 80px offset from top
      setYEnd(containerTop + containerHeight - stickyHeight - 200); // 40px padding from bottom
    };

    updateBoundaries();
    window.addEventListener("resize", updateBoundaries);
    return () => window.removeEventListener("resize", updateBoundaries);
  }, []);

  const y = useTransform(scrollY, [yStart, yEnd], [yStart, yEnd], {
    clamp: true,
  });

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center pt-20  h-screen overflow-hidden md:overflow-visible relative"
    >
      <motion.div
        ref={stickyRef}
        className="flex flex-col w-full items-center justify-center gap-12 z-10"
        style={{
          position: "absolute",
          top: 80,
          y,
          willChange: "transform",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-2 z-10">
          <BlurText
            className="text-4xl md:text-5xl font-semibold w-full max-w-sm leading-tight"
            text="Just Build it with BLACKBOX"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-md opacity-70"
          >
            The AI builder loved by everyone
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[330px] md:w-[450px] p-4 px-6 bg-[#080808] border border-[#262626] flex items-center justify-center z-10"
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

      <div className="flex flex-col absolute bottom-4 z-20 items-center animate-pulse">
        <span>Keep scrolling</span>
        <ChevronDown />
      </div>

      <motion.img
        initial={{ opacity: 0, translateX: 10 }}
        animate={{ opacity: 0.7, scale: 1, translateX: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
        src="/hero-ill-c.png"
        className="opacity-50 absolute top-48 hidden md:block"
      />

      <motion.img
        initial={{ opacity: 0, translateX: 10 }}
        animate={{ opacity: 0.7, scale: 1, translateX: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
        src="/hero-ill.png"
        className="opacity-50 absolute top-32 md:top-42 min-h-[80%] min-w-[140%] md:hidden"
      />
    </div>
  );
}
