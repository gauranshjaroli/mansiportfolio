import React from "react";

const posts = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
];

const InstagramGrid = () => {
  return (
    <section className="py-24 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-yellow-500 mb-4">
        Instagram Work
      </h2>

      <p className="text-gray-400 mb-12">
        Aesthetic posts, branding creatives & social media growth
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {posts.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;