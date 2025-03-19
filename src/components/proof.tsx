export function Proof() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col items-center justify-center gap-8 text-center max-w-[80%]">
        <p className="text-sm md:text-base">
          More than 10M developers and Fortune 500 companies using BLACKBOX
        </p>

        <div className="w-full overflow-hidden flex items-center justify-center">
          <img
            src="/logos.svg"
            className="grayscale min-w-[180%] md:min-w-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
