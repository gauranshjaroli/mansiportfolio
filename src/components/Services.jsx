import React from "react";
import { BarChart, Palette, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      icon: BarChart,
      description:
        "Manage and grow your Instagram presence with consistent posting, content strategy, and audience engagement.",
    },
    {
      title: "Content Creation",
      icon: Palette,
      description:
        "High-quality creatives, Scripts, and promotional Reels to attract attention and build brand identity.",
    },
    {
      title: "Reels & Video Editing ",
      icon: Video,
      description:
        "Engaging reels and short-form content to increase reach, boost engagement, and drive audience growth.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gray-900 text-center">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          Services I Offer
        </h2>

        {/* SEO paragraph */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Helping brands grow through social media management, creative design,
          and content strategies that increase engagement and visibility.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-700 bg-black hover:border-yellow-500 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gray-800 group-hover:bg-yellow-500 transition">
                  <Icon className="text-yellow-500 group-hover:text-black" size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;