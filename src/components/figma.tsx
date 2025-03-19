import { ArrowRight, Link } from "lucide-react";

export function Figma() {
  return (
    <div className="w-full mt-46 border-b flex items-center justify-center border-[#222] relative">
      <div className="absolute bottom-36 w-full border-t z-0 border-[#222]"></div>
      <div className="absolute bottom-48 w-full border-t z-0 border-[#222]"></div>

      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center gap-14 relative">
        <div className="absolute w-[68%] h-full flex items-center justify-between">
          <div className="h-full border-r border-[#222]"></div>
          <div className="h-full border-r border-[#222]"></div>
        </div>

        <h2 className="text-5xl font-semibold max-w-xl leading-tight">
          Go From <span className="gradientText">Figma to Live Website</span> in
          Seconds
        </h2>

        <div className="flex items-center justify-center gap-16 z-10">
          <img src="/figma-file-frame.png" width="150" />

          <ArrowRight className="opacity-70" />

          <div className="flex flex-col border border-[#222]">
            <div className="flex items-center gap-2 text-sm p-2 border-b border-[#222] bg-[#090909]">
              <Link size={16} />
              <p>
                https://<span className="opacity-60">your-project</span>
                .blackbox.ai
              </p>
            </div>

            <img src="tesla-page.png" width="550" />
          </div>
        </div>
      </div>
    </div>
  );
}
