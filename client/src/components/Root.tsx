import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { CustomCursor } from "./CustomCursor";
import { Toaster } from "sonner";

export function Root() {
  return (
    <div className="min-h-[100dvh] bg-[#151515] text-white antialiased overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <Outlet />
      <Toaster richColors theme="dark" position="top-center" />
    </div>
  );
}
