import ImageTrail from "./ui/image-tail";

export function Screenshots() {
  return (
    <div className="w-full border-b flex items-center justify-center border-[#222] relative h-[80vh]">
      <div className="min-w-[80%] max-w-[80%] flex flex-col items-center justify-center text-center">
        <p className="text-sm opacity-60 z-20">(hover me and see)</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-xl leading-tight z-20">
          Turn Any <span className="text-[#F24E1E]">Screenshot</span>{" "}
          <span className="text-[#FFD322]">Into</span> a Functional{" "}
          <span className="text-[#0ACF83]">Website</span>
        </h2>
        <div
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
        </div>
      </div>
    </div>
  );
}
