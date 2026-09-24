"use client";

import { RefObject, useEffect, useState } from "react";
import { computeCoverFrame, CoverFrame, FocalPoint } from "./coverFraming";

export function useCoverFrame(
  containerRef: RefObject<HTMLElement | null>,
  imageSize: { width: number; height: number },
  focal: FocalPoint
): CoverFrame | null {
  const [frame, setFrame] = useState<CoverFrame | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const recompute = () => {
      const rect = el.getBoundingClientRect();
      setFrame(
        computeCoverFrame(
          rect.width,
          rect.height,
          imageSize.width,
          imageSize.height,
          focal
        )
      );
    };

    recompute();

    const resizeObserver = new ResizeObserver(recompute);
    resizeObserver.observe(el);
    window.addEventListener("resize", recompute);
    window.addEventListener("orientationchange", recompute);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recompute);
      window.removeEventListener("orientationchange", recompute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, imageSize.width, imageSize.height, focal.top, focal.bottom, focal.centerX]);

  return frame;
}
