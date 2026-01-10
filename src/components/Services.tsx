"use client";

import { useState } from "react";

const services = [
  {
    title: "CINEMATIC VIDEOGRAPHY",
    items: ["Brand films", "Automotive shoots", "Commercials", "Reels"],
  },
  {
    title: "POST PRODUCTION",
    items: ["Professional editing", "Color grading", "Sound design", "Motion graphics"],
  },
  {
    title: "AUTOMOTIVE FILMS",
    items: ["Cars & bikes", "Restoration films", "Cinematic reels", "Launch videos"],
  },
  {
    title: "BRANDING",
    items: ["Brand strategy & identity", "Visual style guides", "Typography & color systems", "Brand storytelling"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen px-6 md:px-16 flex items-center">
      <div className="max-w-6xl w-full mx-auto flex">
        
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-6 text-white tracking-wide">
            WHAT I CAN DO FOR YOU
          </h2>

          {/* Description */}
          <p className="text-base md:text-xl text-[#ececeb] max-w-xl mb-12 leading-relaxed font-sans">
            I help brands grow through high-quality video production,<br />
            editing, and digital content designed for performance and<br />
            engagement.
          </p>

          {/* Services List */}
          <ul className="space-y-0 max-w-xl">
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <li
                  key={index}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group relative cursor-pointer transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className={`
                    py-6 border-b border-[#262626]
                    transition-all duration-300
                    ${isOpen ? "bg-[#d0ff71] text-black" : "bg-transparent text-white hover:bg-white/5"}
                  `}>
                    <div className="flex items-center justify-between px-0">
                      <div className="flex items-center gap-6">
                        {/* Number */}
                        <span className={`
                          text-2xl md:text-4xl font-heading font-medium
                          transition-all duration-300
                          ${isOpen ? "text-black" : "text-[#d0ff71]"}
                        `}>
                          {index + 1}.
                        </span>
                        
                        {/* Service Title */}
                        <span className="text-xl md:text-4xl font-heading font-medium tracking-wider">
                          {service.title}
                        </span>
                      </div>

                      {/* Arrow with smooth animation */}
                      <span className={`
                        text-2xl transition-transform duration-500
                        ${isOpen ? "rotate-180 text-black" : "rotate-0 text-white"}
                      `}>
                        ↓
                      </span>
                    </div>

                    {/* Expandable Content with smooth animation */}
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}>
                      <div className="mt-8 space-y-4 pl-12">
                        {service.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-4 text-black font-sans"
                          >
                            {/* Bullet */}
                            <div className="h-1.5 w-1.5 rounded-full bg-black flex-shrink-0" />
                            {/* Item text */}
                            <span className="text-base md:text-lg">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column - Empty */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
}