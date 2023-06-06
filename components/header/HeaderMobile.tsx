"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import NavbarItems from "./NavbarItems";
import Button from "../Button";
import Icons from "../Icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiMenu3Line } from 'react-icons/ri'
import ButtonNav from "../ButtonNav";

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuMobile = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      initial={{ y:-40, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="md:hidden"
    >
      <RiMenu3Line className="cursor-pointer text-white md:hidden transition  hover:text-[#20bbf8]" size={30} onClick={showMenuMobile}/>
     
      {showMenu && (
        <div className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-10 w-[80%] h-full overflow-y-scroll bg-[#112240] flex flex-col items-center px-4 py-10 realtive"
          >
              <MdOutlineClose
               onClick={showMenuMobile}
               className="text-3xl text-[#20bbf8] cursor-pointer transition-all hover:text-red-500 absolute right-4"
              />
            <div className="flex flex-col items-center gap-7">
              <ul 
              className="flex flex-col gap-7 text-lg">
                <NavbarItems
                  onClick={showMenuMobile}
                  href="home"
                  name="Home"
                  transition={{ duration: 0.1, delay:0.6 }}
                />
                <NavbarItems
                  onClick={() => setShowMenu(false)}
                  href="about"
                  name="About"
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
                <NavbarItems
                  onClick={showMenuMobile}
                  href="education"
                  name="Education"
                  transition={{ duration: 0.5, delay: 1 }}
                />
                <NavbarItems
                  onClick={showMenuMobile}
                  href="skills"
                  name="Skills"
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
                <NavbarItems
                  onClick={showMenuMobile}
                  href="contact"
                  name="Contact"
                  transition={{ duration: 0.5, delay: 1.4 }}
                />
              </ul>
              <div className="flex flex-col gap-7 ml-4">
                <Button
                  name="Resume"
                  transition={{ duration: 0.2, delay: 1.6 }}
                  href="/images/Curriculo-Julio.pdf"
                  target="_blank"
                />
                <ButtonNav
                  name="Lets talk"
                  transition={{ duration: 0.2, delay: 1.8 }}
                  href="contact"
                  cover
                />
              </div>
              <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex gap-7 mt-6 justify-between text-[#20bbf8] z-10 bottom-20">
                <Icons href="/" icon={<FaLinkedin size={20} />} />
                <Icons href="/" icon={<FiGithub size={20} />} />
                <Icons href="/" icon={<FaInstagram size={20} />} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default HeaderMobile;
