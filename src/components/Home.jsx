import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profileImg from "../assets/profile-pic.JPG";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-red-950 flex flex-col text-center md:text-left md:flex-row px-6 md:px-20 py-25 items-center justify-evenly relative gap-10">
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Hi, I'm <span className="text-yellow-400">Tosin Ajibade</span>
          </h1>
          <p className="text-gray-300 mb-5 text-lg max-w-xl">
            I'm a passionate Frontend Developer focused on creating responsive,
            user-friendly websites with clean interfaces and smooth
            interactions. I love turning creative ideas into real digital
            experiences that not only look good but also work perfectly across
            all devices.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-red-950 px-6 py-2 rounded font-semibold hover:bg-amber-500 transition">
              View My Projects
            </motion.a>
            <div className="flex gap-4 text-2xl text-yellow-400">
              <a href="https://www.tiktok.com/@code_by_tosin?_t=ZS-8yO60NTIpr6&_r=1">
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://github.com/codeByTosin80">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/tosin-adeola-404b9725b/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}>
          <img
            src={profileImg}
            alt="Tosin Ajibade"
            className="md:w-80 h-80 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
        </motion.div>

        {/* Bouncing Scroll-down Arrow */}
        <motion.a
          href="#about"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="hidden md:block absolute bottom-10 text-3xl text-yellow-400 border-t-0 border-b-1 border-l-1 border-r-1 border-yellow-400 px-5 py-5 rounded-b-full">
          ↓
        </motion.a>
      </section>
    </>
  );
};

export default Home;
