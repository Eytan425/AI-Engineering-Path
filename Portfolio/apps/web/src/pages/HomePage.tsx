import Hero from "../components/home/Hero";
import AboutTeaser from "../components/home/AboutTeaser";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TechStack from "../components/home/TechStack";
import ContactMe from "../components/home/ContactMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <FeaturedProjects />
      <TechStack/>
      <ContactMe/>
    </>
  )
}