"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingMedia = () => {
  const { scrollYProgress } = useScroll();

  /**
   * 🔁 ROTATION LOGIC
   * 0.0 → 0°      (Hero)
   * 0.4 → 180°    (Services) → BACK IMAGE
   * 0.8 → 360°    (About)    → FRONT IMAGE AGAIN
   */
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    [0, 180, 360]
  );

  /**
   * 📍 POSITIONING
   * Center → Right while scrolling
   */
  const x = useTransform(scrollYProgress, [0, 0.4], ["0px", "380px"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="relative h-full w-full">
        <motion.div
          style={{ rotateY, x, y }}
          className="
            absolute
            top-[28%]
            left-1/2
            -translate-x-1/2
            h-[280px] w-[180px]
            sm:h-[350px] sm:w-[230px]
            md:h-[380px] md:w-[260px]
            lg:h-[450px] lg:w-[300px]
            rounded-3xl
            shadow-2xl
            will-change-transform
            [transform-style:preserve-3d]
          "
        >
          {/* FRONT FACE — IMAGE 1 */}
          <div
            className="
              absolute inset-0
              rounded-3xl overflow-hidden
              [backface-visibility:hidden]
            "
          >
            <Image
              src="/Avatar.webp"   // Image 1
              alt="Front"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* BACK FACE — IMAGE 2 */}
          <div
            className="
              absolute inset-0
              rounded-3xl overflow-hidden
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            <Image
              src="/Avatar2.webp"  // Image 2 (back side)
              alt="Back"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingMedia;