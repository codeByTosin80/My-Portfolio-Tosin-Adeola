import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImg from "../assets/profile-pic.JPG";


const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full min-h-screen bg-white flex flex-col text-center md:text-left px-6 md:px-20 py-25  space-y-4 gap-2 overflow-hidden">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="w-10 h-0.5 bg-red-900"></span>
          <p className="text-red-950 font-mono text-sm relative">About</p>
        </div>
        {/* Main About Text */}
        <div className=" flex flex-col md:flex-row-reverse justify-evenly items-center gap-20">
          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ x: 0, opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-red-950 underline underline-offset-10">
              ABOUT ME
            </motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0, y: 50 }}
              whileInView={{ x: 0, opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 text-lg max-w-xl  md:max-h-full md:overflow-visible overflow-scroll">
              I'm Tosin Ajibade, a passionate Frontend Developer and Creative
              Designer based in <span className="font-bold text-red-950">
                Abeokuta, Ogun State, Nigeria
              </span>
              . I specialize in building responsive websites and user interfaces
              that deliver seamless experiences. With a keen eye for design and
              strong coding skills, I transform ideas into engaging web
              solutions using HTML, CSS, JavaScript, and modern frameworks like
              React. I'm dedicated to continuous learning and passionate about
              crafting clean, intuitive, and accessible web designs. Beyond
              coding, I enjoy collaborating with teams, solving problems, and
              creating products that make a difference. Let's connect and build
              something amazing together!
            </motion.p>
          </div>
          {/* Profile image */}
          <motion.div
            initial={{ x: -100, opacity: 0, y: 50 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <img
              src={profileImg}
              alt="Tosin Ajibade"
              className="md:w-80 h-80 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About