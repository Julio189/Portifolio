"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface ButtonProps {
  href: string;
  name: string;
  transition?: any;
  target?: string;
  cover?: boolean;
}

const ButtonNav: React.FC<ButtonProps> = ({
  href,
  name,
  transition,
  target,
  cover,
}) => {
  return (
    <Link
    to={href}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        className={`text-base rounded-md border border-[#20bbf8] font-semibold px-4 py-2 overflow-hidden relative ${
          cover
            ? "text-[#081b29] bg-[#20bbf8] z-0 before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-45 before:w-0 before:h-[350%] before:bg-[#081b29] transition-colors before:duration-500 hover:before:w-full hover:text-[#20bbf8] before:-z-10 hover:border-white"
            : "text-[#20bbf8] before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:-z-20 before:w-0 before:h-[350%] before:bg-[#20bbf8] transition-colors before:duration-500 hover:before:w-full hover:border-white hover:text-white"
        }`}
      >
        {name}
      </motion.button>
    </Link>
  );
};

export default ButtonNav;
