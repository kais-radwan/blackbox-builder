import { RevealFx } from "./ui/reveal";
import { useEffect, useRef, useState } from "react";

export function Steps() {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 300);
          // Disconnect after triggering once
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when at least 10% of the element is visible
      },
    );

    const currentRef = revealRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="w-full mt-46 border-b flex items-start justify-center border-[#222] relative overflow-hidden">
      <div
        ref={revealRef}
        className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md mb-12 leading-tight">
          Build Whatever You Want
        </h2>
        <RevealFx speed="slow" className={`${!isVisible && "opacity-0"}`}>
          <img
            src="/builder-steps.png"
            className="min-w-[125%] md:min-w-[80%] md:w-[80%] border-r border-[#222] -mb-10"
          />
        </RevealFx>
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-[rgba(0, 0, 0, 0)] to-white/5"></div>
      </div>
    </div>
  );
}
