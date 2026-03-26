import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-2">
            Mansi Bisen
          </h2>

          <p className="text-gray-400 text-sm mb-2">
            Pune, Maharashtra
          </p>

          <p className="text-gray-400 text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
            <Phone size={16} /> +91 93028 49015
          </p>

          <p className="text-gray-400 text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
            <Mail size={16} /> mansibisen0@gmail.com
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Content Creator & Social Media Manager
          </p>
        </div>

        {/* CENTER */}
        <div className="text-gray-400 text-sm">
          <p>© 2026 All Rights Reserved</p>
          <p className="mt-1">
            Crafted with ❤️ by{" "}
            <span className="text-yellow-500">Gauransh Jaroli</span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end gap-4">

          <a
            href="https://www.instagram.com/0_.rhyme._.0/"
            target="_blank"
            className="p-3 bg-gray-900 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/mansi-bisen-a2009023b/"
            target="_blank"
            className="p-3 bg-gray-900 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="p-3 bg-gray-900 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:mansi@email.com"
            className="p-3 bg-gray-900 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://wa.me/919302849015"
            target="_blank"
            className="p-3 bg-gray-900 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <Phone size={18} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;