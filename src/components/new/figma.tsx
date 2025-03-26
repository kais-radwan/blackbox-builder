import { Figma, Frame, MousePointer2, PointerIcon } from "lucide-react";

export function NewFigma() {
  return (
    <div className="w-full flex items-center justify-center z-10 md:px-12">
      <div className="w-full max-w-[90%] md:max-w-[80%] flex flex-col lg:flex-row gap-24 lg:gap-0 items-center h-full py-24">
        <div className="w-full lg:min-w-[45%] lg:max-w-[45%] h-full flex flex-col pr-10">
          <div className="flex items-center w-full">
            <div
              className="w-5 h-5 bg-white rounded-full"
              style={{
                boxShadow:
                  "0px 0px 0px 5px rgba(255, 255, 255, 0.1), 0px 0px 0px 8px rgba(255, 255, 255, 0.1)",
              }}
            ></div>
            <div className="w-36 bg-gradient-to-r from-white to-transparent h-[1.5px]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-medium leading-tight mt-6">
            Figma to Live <br />
            Website in Seconds
          </h2>
          <p className="mt-8 lg:max-w-[90%] text-sm md:text-[1.2rem] opacity-70 mb-12 lg:mb-28">
            No waiting. No code. No workarounds.
            <br />
            <br />
            Just upload your figma file and watch BLACKBOX build it for you in
            seconds
          </p>

          <a
            href="/"
            className="flex items-center gap-2 z-20 underline text-lg hover:opacity-80 transition-all"
          >
            <Figma size={24} />
            <span>Get yours built now</span>
          </a>
        </div>

        <div className="w-full flex flex-col items-center justify-center h-full z-20 cursor-default relative overflow-hidden p-2">
          <div
            className="w-full bg-black rounded-3xl h-[26.438rem] border border-[#2D2D2D] relative pl-[10rem] flex items-center justify-center z-10"
            style={{
              boxShadow: "0px 0px 0px 6px #121212, 0px 0px 0px 7px #2f2f2f",
            }}
          >
            <div className="absolute p-4 top-0 left-0 text-[12px] rounded-l-3xl bg-[#131313] border-r border-white/10 h-full w-[10rem] flex flex-col gap-6">
              <Figma size={32} className="opacity-70" />
              <div className="flex flex-col w-full gap-3">
                <div className="opacity-60">Layers</div>
                <div className="flex flex-col w-full gap-2">
                  <div className="p-2 py-1 w-full bg-blue-400/10 rounded-lg flex items-center gap-2">
                    <Frame size={14} />
                    <div>Landing Page</div>
                  </div>

                  <div className="p-2 py-1 w-full rounded-lg flex items-center gap-2">
                    <Frame size={14} />
                    <div>Blog Page</div>
                  </div>

                  <div className="p-2 py-1 w-full rounded-lg flex items-center gap-2">
                    <Frame size={14} />
                    <div>Pricing Page</div>
                  </div>

                  <div className="p-2 py-1 w-full rounded-lg flex items-center gap-2">
                    <Frame size={14} />
                    <div>Signup Page</div>
                  </div>
                </div>
              </div>
            </div>

            <MousePointer2 className="absolute bottom-24 right-32" />

            <div className="w-full h-full flex flex-col justify-between items-center pt-24 pb-4">
              <div className="flex flex-col gap-1 items-center justify-center relative">
                <p className="w-full text-left text-[10px] text-blue-300/80">
                  Landing Page
                </p>
                <img src="/iphone-figma.png" width="350" />
              </div>
              <img src="/figma-bar.png" width="350" />
            </div>

            <div className="absolute -bottom-2 w-[90%] left-[5%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          <video
            autoPlay
            playsInline
            loop
            muted
            className="mt-36 absolute z-0"
            style={{ filter: "blur(70px)" }}
          >
            <source src="/beam-1.webm" />
          </video>
          <video autoPlay playsInline loop muted className="-mt-56 z-0 w-full min-w-[120%] md:min-w-full">
            <source src="/beam-1.webm" />
          </video>

          <div
            className="w-full p-4 px-6 bg-[#0D0C0D] border border-[#2D2D2D] rounded-2xl flex items-center gap-3 z-10 relative"
            style={{
              boxShadow: "0px 0px 0px 6px #121212, 0px 0px 0px 7px #2f2f2f",
            }}
          >
            <div className="absolute -top-2 w-[90%] left-[5%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="flex items-center justify-center relative">
              <div
                className="w-3 h-3 rounded-full bg-[#00FFB2] z-10"
                style={{ boxShadow: "0px 0px 4px 0px #00FFB2" }}
              ></div>

              <div
                className="w-3 h-3 rounded-full bg-[#00FFB2] z-0 opacity-50 animate-ping absolute"
                style={{ boxShadow: "0px 0px 4px 0px #00FFB2" }}
              ></div>
            </div>

            <p>https://<span className="text-[#484848] font-bold">your-project</span>.blackbox.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
}
