import React from "react";
import projectImg1 from "../assets/Movie Web page.png";
import projectImg2 from "../assets/Screenshot 2025-06-27 064826.png";
import projectImg3 from "../assets/Screenshot 2025-07-24 183727.png";
import projectImg4 from "../assets/Calculator.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Project = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-white flex flex-col text-center md:text-left px-6 md:px-20 py-25  space-y-4 gap-2 overflow-hidden"
        id="projects">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="w-10 h-0.5 bg-red-900"></span>
          <p className="text-red-950 font-mono text-sm relative">Projects</p>
        </div>
        <h1 className="text-2xl font-bold text-red-950">My Projects</h1>

        {/* Projects card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-lg p-4 flex flex-col items-center gap-4">
            <img src={projectImg1} alt="" />
            <h1 className="text-2xl font-bold text-red-950">Movie Web App</h1>
            <span className="text-sm text-gray-800">React.js and CSS</span>
            <p className="text-gray-600 text-center">
              A responsive movie web app that allows users to search and view
              movie details.
            </p>
            <a
              href="https://react-movie-app-tosin-adeola-s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-950 text-bold bg-white border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition-colors duration-300">
              View Project
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-lg p-4 flex flex-col items-center gap-4">
            <img src={projectImg2} alt="" />
            <h1 className="text-2xl font-bold text-red-950">
              STREAMZY Movie Website
            </h1>
            <span className="text-sm text-gray-800">HTML, CSS, JavaScript</span>
            <p className="text-gray-600 text-center">
              A movie website that provides information about movies, including
              trailers, reviews, and ratings.
            </p>
            <a
              href="https://codebytosin80.github.io/New_Streamzy_Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-950 text-bold bg-white border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition-colors duration-300">
              View Project
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-lg p-4 flex flex-col items-center gap-4">
            <img src={projectImg4} alt="" />
            <h1 className="text-2xl font-bold text-red-950">
              Web Calculator
            </h1>
            <span className="text-sm text-gray-800">HTML, CSS, JavaScript</span>
            <p className="text-gray-600 text-center">
              A web-based calculator application that performs basic arithmetic
              operations.
            </p>
            <a
              href="https://codebytosin80.github.io/New_Streamzy_Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-950 text-bold bg-white border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition-colors duration-300">
              View Project
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white shadow-[0_4px_6px_rgba(0,0,0,0.3)] rounded-lg p-4 flex flex-col items-center gap-4">
            <img src={projectImg3} alt="" />
            <h1 className="text-2xl font-bold text-red-950">
              Xtra Gadgets Website
            </h1>
            <span className="text-sm text-gray-800">HTML, CSS, JavaScript</span>
            <p className="text-gray-600 text-center">
              A gadget website that showcases the latest gadgets and provides
              information about their features and specifications.
            </p>
            <a
              href="https://codebytosin80.github.io/Gadget-Website-Desktop-View/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-950 text-bold bg-white border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-white transition-colors duration-300">
              View Project
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Project;
