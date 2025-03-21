import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/status-app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://soho.shadcnuikit.com/status"
        className="w-full h-full"
      />
    </div>
  );
}
