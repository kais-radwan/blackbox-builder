import { useEffect, useState } from "react";
import CountUp from "../ui/count-up";
import { cn } from "../../lib/utils";

export function Loading() {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClosed(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center transition-all duration-1000 border-b border-white/20",
        closed && "translate-y-[-100%]",
      )}
      style={{ zIndex: 9999 }}
    >
      <div className="w-full h-full relative flex flex-col justify-end p-24 px-[12%]">
        <div className="flex items-center gap-2 text-6xl font-medium w-full max-w-[70%]">
          <CountUp from={0} to={100} duration={2} />%
        </div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-full p-12 border-y border-white/20 flex items-center px-40">
            <p className="text-sm animate-pulse">LOADING</p>
          </div>
        </div>

        <div className="w-full fixed top-0 left-0 h-screen hidden md:flex items-center justify-center z-10">
          <div className="w-full max-w-[95%] lg:max-w-[90%] flex items-center justify-between h-full">
            <div className="flex items-center h-full gap-10">
              <div className="w-[1px] h-full bg-gradient-to-r from-white/40 to-transparent"></div>
              <div className="w-[1px] h-full bg-gradient-to-r from-white/40 to-transparent"></div>
            </div>

            <div className="flex items-center h-full gap-10">
              <div className="w-[1px] h-full bg-gradient-to-r from-white/40 to-transparent"></div>
              <div className="w-[1px] h-full bg-gradient-to-r from-white/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
