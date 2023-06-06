"use client";

import Image from "next/image";
import Button from "../Button";
import SpinAnimate from "../SpinAnimate";
import Title from "../Title";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-5 px-[9%] md:pb-10 flex flex-col justify-center items-center gap-5 bg-[#112e42]"
    >
      <Title textWhite="About" textBlue="Me" />
      <div className="relative rounded-[50%] flex justify-center items-center w-40 h-40 md:w-60 md:h-60 ">
        <Image
          className="rounded-[50%] border-2 w-[90%] h-[90%] border-[#20bbf8] bg-slate-900 opacity-75"
          src="/images/foto.png"
          width={200}
          height={200}
          alt="Perfil"
        />
        <SpinAnimate />
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Web Developer!
        </h2>
        <p className="text-white text-sm mt-5 mb-5 w-[70%] mx-auto">
          I try to put into practice my knowledge as a data analyst and
          developer after graduating as a Technician in this area, always aiming
          at benefit and growth of the company and professional growth
        </p>
      </div>
      <Button
        name="Resume"
        href="/images/Curriculo-Julio.pdf"
        target="_blank"
        cover
      />
    </section>
  );
};

export default AboutSection;
