"use client";

import Image from "next/image";
import { useRef } from "react";
import { FocalPoint } from "@/lib/coverFraming";
import { useCoverFrame } from "@/lib/useCoverFrame";

interface PortraitProps {
  src: string;
  alt: string;
  naturalSize: { width: number; height: number };
  focal: FocalPoint;
  priority?: boolean;
  className?: string;
}

export default function Portrait({
  src,
  alt,
  naturalSize,
  focal,
  priority = false,
  className = "",
}: PortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frame = useCoverFrame(containerRef, naturalSize, focal);

  const wrapperStyle = frame
    ? { left: frame.left, top: frame.top, width: frame.width, height: frame.height }
    : { inset: 0 };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div className="absolute" style={wrapperStyle}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
      </div>
    </div>
  );
}
