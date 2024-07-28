import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { ProjectCard } from "./components/pages/home/highlighted-projects/project-card";
import { KnownTechs } from "./components/pages/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  );
}
