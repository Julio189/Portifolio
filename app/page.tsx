import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer/>
    </>
  );
}
