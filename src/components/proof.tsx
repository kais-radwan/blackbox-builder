import { InfiniteSlider } from "./ui/slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src="/brands/logos.svg"
        alt="Apple Music logo"
        className="h-[30px] w-auto grayscale"
      />
    </InfiniteSlider>
  );
}

export function Proof() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col items-center justify-center gap-8 text-center max-w-[80%]">
        <p className="text-sm md:text-base">
          More than 10M developers and Fortune 500 companies using BLACKBOX
        </p>

        <div className="w-full overflow-hidden flex items-center justify-center relative">
          <div className="absolute h-full w-40 right-0 top-0 bg-gradient-to-r from-transparent to-black z-20"></div>
          <InfiniteSliderBasic />
          <div className="absolute h-full w-40 left-0 top-0 bg-gradient-to-l from-transparent to-black z-20"></div>
        </div>
      </div>
    </div>
  );
}
