import React from "react";
import { Helmet } from "react-helmet";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const experiences = [
    {
      company: "Truestate (Bangalore)",
      role: "Social Media Intern",
      description:
        "Worked on social media creatives, post designs, and content planning. Assisted in building brand presence and engagement strategies.",
    },
    {
      company: "ParshWebCraft",
      role: "Social Media & Graphics Intern",
      description:
        "Managing social media, designing creatives, creating reels, and helping businesses grow through content and branding.",
    },
  ];

  const projects = [
    {
      title: "Anand Fashion Instagram Growth",
      description:
        "Designed promotional posts and offers to increase customer engagement and store footfall.",
    },
    {
      title: "Social Media Creatives",
      description:
        "Created multiple Canva designs, banners, and promotional graphics for brands.",
    },
    {
      title: "Reels & Content",
      description:
        "Worked on short-form video content and reels to improve reach and engagement.",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Portfolio | Mansi Bisen</title>
        <meta
          name="description"
          content="Explore the work of Mansi Bisen including social media management, graphic design, and brand growth projects."
        />
      </Helmet>

      <div className="bg-black text-white">

        {/* HERO */}
        <section id="portfolio" className="py-20 text-center">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            My Work
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Social media, design, and content work focused on building
            brand presence and engagement.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl text-yellow-500 mb-10 text-center">
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="border border-gray-700 p-6 rounded-xl bg-gray-900"
              >
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-yellow-500 mb-2">{exp.role}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS / WORK */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl text-yellow-500 mb-10 text-center">
            Projects & Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((item, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition"
              >
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>

                <button className="text-yellow-500 flex items-center gap-2 text-sm">
                  View Details <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Portfolio;