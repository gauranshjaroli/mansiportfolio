import React from "react";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Mansi Bisen | Social Media Manager & Graphic Designer</title>
        <meta
          name="description"
          content="Mansi Bisen is a Social Media Manager and Graphic Designer helping brands grow through creative content, reels, and strategy."
        />
      </Helmet>

      <div className="bg-black text-white">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
              alt="social media workspace"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Balanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

          {/* Glow Effects */}
          <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
          <div className="absolute w-[400px] h-[400px] bg-yellow-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                Mansi Bisen
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              Social Media Manager · Content Creator
            </p>

            <p className="text-gray-400 mb-8">
              I help brands grow through viral reels, aesthetic content, and
              consistent digital presence 🚀
            </p>

            <a href="#portfolio">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:scale-105 transition">
                View My Work <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Home;
