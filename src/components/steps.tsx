export function Steps() {
  return (
    <div className="w-full mt-46 border-b flex items-center justify-center border-[#222] relative">
      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight">
          Build Whatever You Want
        </h2>

        <img
          src="/builder-steps.png"
          className="min-w-[125%] md:min-w-full border-r border-[#222]"
        />

        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-[rgba(0, 0, 0, 0)] to-white/5"></div>
      </div>
    </div>
  );
}
