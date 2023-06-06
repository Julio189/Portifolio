"use client";

import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <nav className="hidden top-full left-0 shadow-[0_5px_10px_-10px] md:flex justify-between gap-8 items-center">
      <div>
        <ul className="flex justify-between">
          <NavbarItems
            href="home"
            name="Home"
            transition={{ duration: 0.1 }}
          />
          <NavbarItems
            href="about"
            name="About"
            transition={{ duration: 0.1, delay: 0.1 }}
          />
          <NavbarItems
            href="education"
            name="Education"
            transition={{ duration: 0.1, delay: 0.2 }}
          />
          <NavbarItems
            href="skills"
            name="Skills"
            transition={{ duration: 0.1, delay: 0.3 }}
          />
          <NavbarItems
            href="contact"
            name="Contact"
            transition={{ duration: 0.1, delay: 0.4 }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
