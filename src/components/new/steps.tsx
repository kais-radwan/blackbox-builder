const texts = [
  "Describe what you want to build in natural language",
  "BLACKBOX builds your full-stack project in seconds",
  "Talk to the editor to edit and scale your project",
  "Test and deploy your project to a public link in one-click",
];

function NumberBox({ number }: { number: number }) {
  return (
    <div
      className="bg-white/10 border-white/15 border rounded-xl text-xl font-medium size-14 flex items-center justify-center z-10"
      style={{
        backdropFilter: "blur(10px)",
        boxShadow:
          "inset 0 -6 10 -6 rgba(0, 0, 0, 0.15), inset 0 4 4 0 rgba(0, 0, 0, 0.25)",
      }}
    >
      {number}
    </div>
  );
}

export function NewSteps() {
  return (
    <div className="w-full flex items-center justify-center md:px-12 z-20 border-y border-white/20">
      <div className="w-full max-w-[90%] md:max-w-[80%] hidden lg:flex flex-col gap-6 items-center justify-between h-full py-24 bg-[url('/steps-gradient.png')]">
        <div className="w-full flex items-center justify-between px-24">
          <NumberBox number={1} />
          <NumberBox number={2} />
          <NumberBox number={3} />
          <NumberBox number={4} />
          <div className="absolute left-[20%] w-[60%] h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-0"></div>
        </div>

        <div className="w-full flex items-center justify-between">
          {texts.map((t, i) => (
            <p key={i} className="text-center max-w-[15rem] font-medium">
              {t}
            </p>
          ))}
        </div>
      </div>

      <div className="w-full flex lg:hidden flex-col items-center justify-center gap-12 py-24 bg-[url('/steps-gradient.png')]">
        {texts.map((t, i) => (
          <p
            key={i}
            className="text-center max-w-[15rem] font-medium flex flex-col items-center justify-center gap-4"
          >
            <NumberBox number={i + 1} />
            <div className="w-full flex items-center justify-center">{t}</div>
          </p>
        ))}
      </div>
    </div>
  );
}
