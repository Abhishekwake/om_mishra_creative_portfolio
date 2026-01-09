"use client";

import FloatingImage from "@/components/FloatingImage";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full grid place-items-center px-6 md:px-16  "
    >
      {/* GRID WRAPPER */}
      <div
        className="
          w-full
          max-w-4xl
          grid
          grid-cols-[1fr_auto_1fr]
          items-center
          gap-6
          md:gap-5
          md:ml-10
        "
      >
        {/* LEFT */}
        <div
          className="
            flex flex-col gap-1
            font-heading
            text-center md:text-left
          "
        >
          <p className="text-2xl sm:text-3xl md:text-3xl text-heading tracking-tighter uppercase ml-1">
            OM MISHRA
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-[110px] font-bold leading-none text-primary tracking-tight lg:mb-8">
            MEDIA
          </h1>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          {/* <FloatingImage/> */}
        </div>

        {/* RIGHT */}
        <div
          className="
            flex flex-col gap-3 md:gap-4
            font-heading
            text-center md:text-right
            items-center md:items-end
          "
        >
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-[110px] font-bold leading-none text-primary lg:mt-12 tracking-tighter">
            CREATOR
          </h1>

          <p className="max-w-md text-sm sm:text-base md:text-base text-heading">
            "I craft cinematic visuals for brands,<br /> cars, bikes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
