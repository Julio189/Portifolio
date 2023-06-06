"use client";


import { motion } from "framer-motion";
import { Link } from 'react-scroll';

interface NavbarItemsProps {
  href: string;
  name: string;
  transition?: any;
  onClick?:() => void
}

const NavbarItems: React.FC<NavbarItemsProps> = ({
  href,
  name,
  transition,
  onClick
}) => {
  return (
    <motion.li
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
    >
      <Link
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className='my-7 text-base font-semibold cursor-pointer ml-9 hover:text-[#20bbf8] transition duration-300 text-white'
      >
        {name}
      </Link>
    </motion.li>
  );
};

export default NavbarItems;
