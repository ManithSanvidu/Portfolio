import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Toaster } from "sonner";

export function Root() {
  return (
    <div className="min-h-[100dvh] bg-transparent text-white antialiased overflow-x-hidden">
      <Navigation />
      <Outlet />
      <Toaster richColors theme="dark" position="top-center" />
    </div>
  );
}
