"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Portrait from "./Portrait";
import { useMediaQuery } from "@/lib/useMediaQuery";

const PORTRAIT_NATURAL_SIZE = { width: 1145, height: 1374 };
const PORTRAIT_FOCAL = { top: 0.18, bottom: 0.5, centerX: 0.47 };

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  /*
   * =========================================================
   * POINTER POSITION
   * =========================================================
   */

  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const smoothPointerX = useSpring(pointerX, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  const smoothPointerY = useSpring(pointerY, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  /*
   * =========================================================
   * IMAGE PARALLAX
   * =========================================================
   */

  const normalizedX = useTransform(
    smoothPointerX,
    [0, 100],
    [-0.5, 0.5]
  );

  const normalizedY = useTransform(
    smoothPointerY,
    [0, 100],
    [-0.5, 0.5]
  );

  const imageX = useTransform(
    normalizedX,
    [-0.5, 0.5],
    ["1%", "-1%"]
  );

  const imageY = useTransform(
    normalizedY,
    [-0.5, 0.5],
    ["0.7%", "-0.7%"]
  );

  const imageRotate = useTransform(
    normalizedX,
    [-0.5, 0.5],
    [-0.25, 0.25]
  );

  /*
   * =========================================================
   * BLUE POINTER GLOW
   * =========================================================
   *
   * Kept subtle and behind the portrait.
   */

  const blueGlow = useTransform(
    [smoothPointerX, smoothPointerY],
    ([x, y]) => {
      return `radial-gradient(
        circle 220px at ${x}% ${y}%,
        rgba(37, 99, 255, 0.16) 0%,
        rgba(37, 99, 255, 0.05) 35%,
        transparent 70%
      )`;
    }
  );

  /*
   * =========================================================
   * POINTER TRACKING
   * =========================================================
   */

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (event: MouseEvent) => {
      const xPercent =
        (event.clientX / window.innerWidth) * 100;

      const yPercent =
        (event.clientY / window.innerHeight) * 100;

      pointerX.set(xPercent);
      pointerY.set(yPercent);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice, pointerX, pointerY]);

  /*
   * =========================================================
   * LOAD
   * =========================================================
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        h-[100svh]
        min-h-[650px]
        w-full
        overflow-hidden
        bg-[#05070d]
        text-white
      "
    >
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          BLUE POINTER LIGHT
          Sits BEHIND the portrait.
      ====================================================== */}

      {!isTouchDevice && (
        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            mix-blend-screen
          "
          style={{
            background: blueGlow,
          }}
        />
      )}

      {/* =====================================================
          PORTRAIT
          Portrait moved slightly upward using y offset.
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.06,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.06,
        }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          x: isTouchDevice ? 0 : imageX,
          y: isTouchDevice ? 0 : imageY,
          rotate: isTouchDevice ? 0 : imageRotate,
        }}
        className="absolute inset-0 z-[1]"
      >
        <Portrait
          src="/profile.png"
          alt="Juliana Wada-Victor"
          naturalSize={PORTRAIT_NATURAL_SIZE}
          focal={PORTRAIT_FOCAL}
          priority
          className="h-full w-full"
        />
      </motion.div>

      {/* =====================================================
          DARK CINEMATIC OVERLAY
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-black/12
        "
      />

      {/* =====================================================
          LEFT GRADIENT
          Restored to the stronger original cinematic gradient.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          bg-gradient-to-r
          from-black/80
          via-black/30
          to-black/25
        "
      />

      {/* =====================================================
          TOP GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          bg-gradient-to-b
          from-black/55
          via-transparent
          to-transparent
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[3]
          h-[45%]
          bg-gradient-to-t
          from-[#05070d]
          via-[#05070d]/45
          to-transparent
        "
      />

      {/* =====================================================
          AMBIENT BLUE LIGHT (LEFT)
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.7,
        }}
        transition={{
          duration: 2,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          -left-[30%]
          top-[25%]
          z-[4]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-600/20
          blur-[130px]

          sm:-left-[20%]
          sm:h-[520px]
          sm:w-[520px]

          md:-left-[15%]
          md:h-[650px]
          md:w-[650px]
        "
      />

      {/* =====================================================
          AMBIENT BLUE LIGHT (RIGHT)
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 0.7,
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-[30%]
          top-[35%]
          z-[4]
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-600/20
          blur-[130px]

          sm:-right-[20%]
          sm:h-[520px]
          sm:w-[520px]

          md:-right-[15%]
          md:h-[650px]
          md:w-[650px]
        "
      />

     

      

      {/* =====================================================
          MAIN TYPOGRAPHY
      ====================================================== */}

      {/* SOFTWARE — lower, left side */}

      <div
        className="
          pointer-events-none
          absolute
          left-5
          bottom-[38%]
          z-10

          sm:left-6
          sm:bottom-[36%]

          md:left-8
          md:bottom-[34%]

          lg:left-10
          lg:bottom-[32%]
        "
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "110%",
            }}
            animate={{
              y: isLoaded ? "0%" : "110%",
            }}
            transition={{
              duration: 1.25,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              select-none
              text-[17vw]
              font-semibold
              uppercase
              leading-[0.73]
              tracking-[-0.075em]
              text-white

              sm:text-[13vw]
              md:text-[10vw]
              lg:text-[9vw]
            "
          >
            SOFTWARE
          </motion.h1>
        </div>
      </div>

      {/* ENGINEER + BLUE LINE — very low, right side */}

      <div
        className="
          pointer-events-none
          absolute
          right-5
          bottom-6
          z-10
          flex
          flex-col
          items-end

          sm:right-6
          sm:bottom-7

          md:right-8
          md:bottom-8

          lg:right-10
          lg:bottom-10
        "
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              x: "110%",
            }}
            animate={{
              x: isLoaded ? "0%" : "110%",
            }}
            transition={{
              duration: 1.35,
              delay: 0.52,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              select-none
              whitespace-nowrap
              text-[17vw]
              font-semibold
              uppercase
              leading-[0.82]
              tracking-[-0.075em]
              text-white

              sm:text-[13vw]
              md:text-[10vw]
              lg:text-[9vw]
            "
          >
            ENGINEER
          </motion.h1>
        </div>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: isLoaded ? "18vw" : 0,
            opacity: isLoaded ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-5
            h-[2px]
            min-w-[60px]
            bg-blue-500
            shadow-[0_0_18px_rgba(37,99,255,0.9)]

            md:mt-6
          "
        />
      </div>

      {/* =====================================================
          SPECIALIZATION
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -35,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          x: isLoaded ? 0 : -35,
        }}
        transition={{
          duration: 1,
          delay: 1.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          top-24
          left-5
          z-20
          w-[175px]

          sm:top-28
          sm:left-6
          sm:w-[200px]

          md:top-32
          md:left-8
          md:w-[240px]

          lg:left-10
        "
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[7px] tracking-[0.2em] text-white/40 sm:text-[8px]">
            SPECIALIZATION
          </span>

          <span className="text-[7px] tracking-[0.2em] text-blue-300 sm:text-[8px]">
            01 / 04
          </span>
        </div>

        <div className="mb-3 h-px w-full bg-white/20">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: isLoaded ? "30%" : 0,
            }}
            transition={{
              duration: 1,
              delay: 1.55,
            }}
            className="h-full bg-blue-500"
          />
        </div>

        <p className="text-left text-[9px] font-medium tracking-[0.15em] text-white sm:text-[10px] md:text-xs">
          JULIANA WADA-VICTOR
        </p>

        <p className="mt-1 text-left text-[7px] tracking-[0.13em] text-white/50 sm:text-[8px]">
          IT · DEVOPS · AI · SRE
        </p>
      </motion.div>

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <motion.a
        href="#projects"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          y: isLoaded ? 0 : 15,
        }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        className="
          absolute
          bottom-6
          left-5
          z-20
          flex
          items-center
          gap-2.5

          sm:left-6
          md:bottom-7
          md:left-8
          lg:left-10
        "
      >
        <span className="text-[7px] tracking-[0.2em] text-white/40 sm:text-[8px]">
          SCROLL TO EXPLORE
        </span>

        <motion.span
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={11}
            strokeWidth={1}
            className="text-blue-400"
          />
        </motion.span>
      </motion.a>

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isLoaded ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1.6,
        }}
        className="
          absolute
          bottom-6
          right-5
          z-20

          sm:right-6
          md:bottom-7
          md:right-8
          lg:right-10
        "
      >
        <p className="text-[7px] tracking-[0.18em] text-white/40 sm:text-[8px]">
          DERBY · UNITED KINGDOM
        </p>
      </motion.div>

      {/* =====================================================
          BLUE BOTTOM LINE
      ====================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: isLoaded ? 1 : 0,
        }}
        transition={{
          duration: 1.4,
          delay: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          bottom-0
          left-0
          z-30
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-transparent
          via-blue-500
          to-transparent
        "
      />

      {/* =====================================================
          SUBTLE GRAIN
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            repeating-radial-gradient(
              circle at 0 0,
              rgba(255,255,255,0.8) 0,
              rgba(255,255,255,0.8) 1px,
              transparent 1px,
              transparent 3px
            )
          `,
          backgroundSize: "7px 7px",
        }}
      />
    </section>
  );
}