"use client";

import { useState } from "react";

const services = [
  {
    title: "Cinematic Videography",
    items: ["Brand films", "Automotive shoots", "Commercials", "Reels"],
  },
  {
    title: "Post Production",
    items: ["Professional editing", "Color grading", "Sound design", "Motion graphics"],
  },
  {
    title: "Automotive Films",
    items: ["Cars & bikes", "Restoration films", "Cinematic reels", "Launch videos"],
  },
  {
    title: "Branding",
    items: ["Brand strategy & identity", "Visual style guides", "Typography & color systems", "Brand storytelling"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="min-h-screen px-6 md:px-16 flex items-center">
      <div className="max-w-4xl w-full mx-auto flex">
        
        {/* Left Column - Services Content */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-white-800">
            WHAT I CAN DO FOR YOU
          </h2>

          {/* Description */}
          <p className="text-base text-white-600 max-w-xl mb-12 leading-relaxed">
            I help brands grow through high-quality video production, post-production,
            and digital content crafted for performance, emotion, and engagement.
          </p>

          {/* Services List */}
          <ul className="space-y-2 max-w-xl">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              const isHovered = hoverIndex === index;

              return (
                <li
                  key={index}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="relative overflow-hidden cursor-pointer"
                >
                  {/* Animated background on hover/click */}
                  <div className={`
                    absolute inset-0 bg-[#d0ff71] transition-all duration-300
                    ${isOpen ? "opacity-100" : "opacity-0"}
                    ${isHovered ? "opacity-30" : ""}
                  `} />
                  
                  <div className={`
                    relative z-10 border-b border-gray-200 py-6 px-4
                    transition-all duration-300
                    ${isOpen ? "text-black" : "text-gray-700 hover:text-gray-900"}
                  `}>
                    {/* Service Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Number with custom styling */}
                        <span className={`
                          text-lg font-mono transition-all duration-300
                          ${isOpen ? "text-black font-bold" : "text-gray-400"}
                        `}>
                          0{index + 1}
                        </span>
                        
                        {/* Service Title */}
                        <span className="text-xl md:text-2xl font-medium">
                          {service.title}
                        </span>
                      </div>

                      {/* Animated Arrow */}
                      <div className="relative h-6 w-6">
                        <span className={`
                          absolute inset-0 flex items-center justify-center
                          text-2xl transition-all duration-500
                          ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}
                        `}>
                          ↓
                        </span>
                        <span className={`
                          absolute inset-0 flex items-center justify-center
                          text-2xl transition-all duration-500
                          ${isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}
                        `}>
                          ↓
                        </span>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}
                      `}
                    >
                      <ul className="space-y-4 text-base pl-10">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center gap-4 group/item"
                          >
                            {/* Animated bullet */}
                            <div className="relative">
                              <div className={`
                                h-2 w-2 rounded-full transition-all duration-300
                                ${isOpen ? "bg-black scale-100" : "bg-gray-400 scale-0"}
                              `} />
                              <div className={`
                                absolute inset-0 h-2 w-2 rounded-full
                                bg-[#d0ff71] transition-all duration-300
                                ${isOpen ? "scale-0" : "scale-100"}
                              `} />
                            </div>
                            
                            {/* Item text */}
                            <span className={`
                              transition-all duration-300
                              ${isOpen ? "text-gray-800" : "text-gray-600"}
                              group-hover/item:translate-x-2
                            `}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
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