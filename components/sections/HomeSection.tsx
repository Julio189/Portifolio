"use client";
import { motion } from "framer-motion";
import Button from "../Button";
import Typewriter from "typewriter-effect";

import Icons from "../Icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import ButtonNav from "../ButtonNav";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen -pt-14 md:pt-20 px-[9%] pb-5 flex items-center"
    >
      <div className="md:max-w-[60%] lg:max-w-[50%] max-w-xl">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white text-4xl md:text-6xl font-bold"
        >
          Hi, I am <span className="text-[#20bbf8] animate-pulse">Julio</span>
        </motion.h1>
        <div className="w-80">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-3xl font-bold text-[#20bbf8] mt-6"
          >
            <Typewriter
              options={{
                strings: ["Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h3>
        </div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.9 }}
          className="text-white mt-5 mb-10"
        >
          Degree in Systems Development Technician looking for a job as a Web Developer
        </motion.p>
        <div className="my-5 space-x-5">
        <ButtonNav
            name="Lets talk"
            transition={{ duration: 0.2, delay: 1.4 }}
            href="contact"
            cover
          />

          <Button
            name="Projects"
            transition={{ duration: 0.2, delay: 1.2 }}
            href="https://github.com/Julio189?tab=repositories"
            target="_blank"
          />
         
        </div>
        
      </div>
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="hidden md:flex items-center"
      >
        <Image
          className="bg-[#081b29] opacity-20 rounded-full ml-20 transition-all duration-300 hover:opacity-40"
          width={500}
          height={500}
          alt="foto"
          src="/images/foto.png"
        />
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute flex justify-between text-[#20bbf8] w-40 bottom-20"
      >
        <Icons href="https://www.linkedin.com/in/julio-de-jesus/" icon={<FaLinkedin size={20} />} />
        <Icons href="https://github.com/Julio189" icon={<FiGithub size={20} />} />
        <Icons href="https://www.instagram.com/julio_tech.1/" icon={<FaInstagram size={20} />} />
      </motion.div>
    </section>
  );
};

export default HomeSection;
