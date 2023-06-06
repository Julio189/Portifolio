"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl text-[#ededed] font-semibold">
        Julio Cesar.
      </Link>
    </motion.div>
  );
};

export default Logo;
