import React from "react";
import { Play } from "lucide-react";

const reels = [
  {
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Fashion Promo Reel",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Brand Awareness Reel",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    title: "Creative Content Reel",
  },
];

const ReelsSection = () => {
  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold text-yellow-500 mb-4">
        Reels & Content
      </h2>

      <p className="text-gray-400 mb-12">
        Creating engaging short-form content that drives reach & engagement 🚀
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reels.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            <img
              src={item.thumbnail}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Play className="text-white" size={40} />
            </div>

            {/* Title */}
            <p className="mt-3 text-gray-300">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;