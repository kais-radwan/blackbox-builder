import { ArrowUpRight } from "lucide-react";
import { RevealFx } from "./ui/reveal";

export function Clone() {
  return (
    <div className="w-full mt-46 border-b flex items-center justify-center border-[#222] relative">
      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight">
          <span className="text-[#6D7BB6]">Clone</span> Any{" "}
          <span className="text-[#6D7BB6]">Website</span> in One-Click
        </h2>

        <img src="/clone-visual.png" className="min-w-[125%] md:min-w-full" />

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-[rgba(0, 0, 0, 0)] to-[#263078]/30"></div>

        <div className="absolute bottom-20 left-48 hidden md:flex">
          <RevealFx>
            <div className="p-3 text-sm flex items-center justify-center bg-black border-[#333333] border">
              <p className="w-48 text-left">Clone apple.com</p>
              <div className="size-7 bg-white flex items-center justify-center text-black">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </RevealFx>
        </div>
      </div>

      <div className="absolute top-68 right-86 hidden md:flex">
        <RevealFx>
          <div className="p-3 text-sm flex items-center justify-center bg-black border-[#333333] border">
            <p className="w-48 text-left">Clone tesla.com</p>
            <div className="size-7 bg-white flex items-center justify-center text-black">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </RevealFx>
      </div>
    </div>
  );
}
