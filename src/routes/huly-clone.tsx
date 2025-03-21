import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/huly-clone")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-screen">
      <iframe src="https://huly.io" className="w-full h-full" />
    </div>
  );
}
