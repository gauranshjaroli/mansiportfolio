import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full top-[-100px] right-[-100px]" />

      <div className="relative z-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
          About Me
        </h2>

        {/* Tagline */}
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Social Media Manager & Content Creator helping brands grow through content, creativity, and consistency.
        </p>

        {/* Main Content */}
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I am currently pursuing my MBA and building hands-on experience in 
          social media management, content creation. 
          Originally from <span className="text-yellow-500">Balaghat, Madhya Pradesh</span>, 
          I am passionate about helping brands grow their online presence through 
          creative strategies and engaging content.
          <br /><br />
          I have worked on real projects including social media handling, 
          promotional creatives, and reel-based content that helps businesses 
          increase visibility, attract customers, and build a strong digital identity.
        </p>

      </div>
    </section>
  );
};

export default About;