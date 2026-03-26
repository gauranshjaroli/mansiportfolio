import React from "react";
import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 text-center bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            Let’s collaborate and build something creative together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
              <Mail className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Gmail</p>
                <p className="text-white">mansibisen0@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
              <Phone className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+91 93028 49015</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
              <Instagram className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <p className="text-white">@0_.rhyme._.0</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
              <MapPin className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Balaghat, MadhyaPradesh</p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="bg-gray-900 p-6 rounded-xl">

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="text-green-400 mx-auto mb-3" size={40} />
                <p className="text-white text-lg">Message Sent!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
                />

                <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;