"use client";
import { useEffect, useState } from "react";

export default function BreakpointIndicator() {
  const [breakpoint, setBreakpoint] = useState("Loading...");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial values
    setWindowWidth(window.innerWidth);
    updateBreakpoint(window.innerWidth);

    // Update on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateBreakpoint(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateBreakpoint = (width: number) => {
    if (width >= 1536) {
      setBreakpoint("2xl");
    } else if (width >= 1280) {
      setBreakpoint("xl");
    } else if (width >= 1024) {
      setBreakpoint("lg");
    } else if (width >= 768) {
      setBreakpoint("md");
    } else if (width >= 640) {
      setBreakpoint("sm");
    } else {
      setBreakpoint("xs");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full z-50 text-sm">
      <div className="font-bold">{breakpoint}</div>
      <div className="text-xs">{windowWidth}px</div>
    </div>
  );
}
