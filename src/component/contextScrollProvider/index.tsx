"use client";
import { createContext, useContext, useState } from "react";

type ScrollContextType = {
  yPos: number;
  setYPos: (position: number) => void;
  scrollDirection: number;
  setScrollDirection: (direction: number) => void;
  scrollToTop: () => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollDirection, setScrollDirection] = useState(1);
  const [yPos, setYPos] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        yPos,
        setYPos,
        scrollDirection,
        setScrollDirection,
        scrollToTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrolls() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
