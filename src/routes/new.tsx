import { createFileRoute } from "@tanstack/react-router";
import { NewHero } from "../components/new/hero";
import { NewHeader } from "../components/new/header";
import { NewFigma } from "../components/new/figma";
import { NewClone } from "../components/new/clone";
import { NewScreenshot } from "../components/new/screenshot";

export const Route = createFileRoute("/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <img
        src="/noise.png"
        className="fixed top-0 left-0 w-full h-screen object-cover z-10"
      />
      <NewHeader />
      <NewHero />
      <NewFigma />
      <NewClone />
      <NewScreenshot />

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
    </>
  );
}
