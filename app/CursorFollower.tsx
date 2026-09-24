"use client";

import { useEffect, useRef } from "react";

const SIZE = 24;
const NAVY = "#0a1f44";

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX - SIZE / 2}px, ${e.clientY - SIZE / 2}px, 0)`;
      el.style.opacity = "1";
      const inNavySection =
        e.target instanceof Element && e.target.closest("#about, #skills");
      el.style.backgroundColor = inNavySection ? NAVY : "#ffffff";
    };
    const hide = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white transition-colors duration-200"
      style={{ width: SIZE, height: SIZE, opacity: 0 }}
    />
  );
}
