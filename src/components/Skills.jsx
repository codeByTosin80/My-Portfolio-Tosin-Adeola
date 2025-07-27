import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-white flex flex-col text-center md:text-left px-6 md:px-20 py-25  space-y-4 gap-2 overflow-hidden"
        id="skills">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="w-10 h-0.5 bg-red-900"></span>
          <p className="text-red-950 font-mono text-sm relative">Skills</p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ x: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-red-950 underline underline-offset-10">
          MY SKILLS
        </motion.h1>

        {/* Skills boxex */}
        <motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            
              className="bg-red-950 text-white p-6 rounded-lg shadow-lg flex flex-col gap-1">
              <span className="text-5xl mb-4">
                <i class="fa-brands fa-html5"></i>
              </span>
              <h2 className="text-xl font-semibold mb-2">HTML</h2>
              <p className="text-gray-300">
                Proficient in HTML5, creating semantic and accessible web
                structures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-red-950 text-white p-6 rounded-lg shadow-lg flex flex-col gap-1">
              <span className="text-5xl mb-4">
                <i class="fa-brands fa-css3"></i>
              </span>
              <h2 className="text-xl font-semibold mb-2">CSS</h2>
              <p className="text-gray-300">
                Experienced in CSS3, including Flexbox and Grid for responsive
                designs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-red-950 text-white p-6 rounded-lg shadow-lg">
              <span className="text-5xl mb-4">
                <i class="fa-brands fa-js"></i>
              </span>
              <h2 className="text-xl font-semibold mb-2">JavaScript</h2>
              <p className="text-gray-300">
                Skilled in JavaScript ES6+ for dynamic and interactive web
                applications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-red-950 text-white p-6 rounded-lg shadow-lg">
              <span className="text-5xl mb-4">
                <i class="fa-brands fa-react"></i>
              </span>
              <h2 className="text-xl font-semibold mb-2">React</h2>
              <p className="text-gray-300">
                Proficient in React for building modern, component-based user
                interfaces.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-red-950 text-white p-6 rounded-lg shadow-lg">
              <span className="text-5xl mb-4">
                <i class="fa-brands fa-css"></i>
              </span>
              <h2 className="text-xl font-semibold mb-2">Tailwind CSS</h2>
              <p className="text-gray-300">
                Experienced in Tailwind CSS for rapid UI development with
                utility-first styling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.7 }}
              className="bg-red-950 text-white p-6 rounded-lg shadow-lg">
              <span className="text-5xl mb-4">
                <i class="fa-brands fa-git-alt"></i>
              </span>
              <h2 className="text-xl font-semibold mb-2">Git</h2>
              <p className="text-gray-300">
                Familiar with Git for version control and collaboration on
                projects.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-6 text-lg md:max-h-full md:overflow-visible overflow-scroll">
          I am continuously learning and adapting to new technologies to enhance
          my skills and stay updated with industry trends. My goal is to create
          user-friendly, efficient, and visually appealing web applications that
          provide exceptional user experiences.
        </motion.p>
      </div>
    </>
  );
}

export default Skills