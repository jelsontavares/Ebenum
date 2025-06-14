"use client";

import React from "react";

interface BackgroundEffectProps {
  variant?: "home" | "default";
}

export default function BackgroundEffect({ variant = "default" }: BackgroundEffectProps) {
  return (
    <div
      className="fixed inset-0 -z-10 bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-fixed scale-125"
      style={{
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      {/* Optional: Overlays */}
      {variant === "home" && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06)_0%,transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.04)_0%,transparent_40%)]" />
      )}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#3E2B1D]/30 via-transparent to-[#3E2B1D]/20 " />
    </div>
  );
}
