import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-red-950 text-white py-20 px-8 md:px-20 flex flex-col justify-center overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Contact Me</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to say hi? I’m always
          open to new opportunities and meaningful conversations.
        </p>
      </motion.div>

      {/* Form & Socials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full">
          <form
            action="https://formspree.io/f/xeozkoen"
            method="POST"
            className="bg-white p-6 rounded-lg shadow-lg text-red-950">
            <input type="hidden" name="_captcha" value="false" />
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none resize-none scrollbar-none"
                rows="4"
                placeholder="Your message"></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-amber-500 text-red-950 px-6 py-2 rounded font-semibold transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full order-last md:order-none flex flex-col items-center gap-4">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Let's Connect
          </h3>
          <div className="flex gap-6 text-2xl">
            <a href="https://www.tiktok.com/@code_by_tosin?_t=ZS-8yO60NTIpr6&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://x.com/codeByTosin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tosin-adeola-404b9725b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/codeByTosin80"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/code_by_tosin?igsh=MWJiaDZodW1xM2x5eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
