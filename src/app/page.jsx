import Image from "next/image";
import HeaderSection from "./_sections/header-section";
import CoverSection from "./_sections/cover-section.";
import StackSection from "./_sections/stack-section";
import AboutSection from "./_sections/about-section";
import ExperienceSection from "./_sections/experience-section";

export default function Home() {
  return (
    <>
        <HeaderSection />
        <CoverSection />
        <AboutSection />
        <StackSection />
        <ExperienceSection />
    </>
  );
}
