import { ProjectCard } from "../../../Components/Projectcard/Projectcard";
import "./pokedex.css";

export function Pokedex() {
  return (
    <section className="Pokedex-section">
      <h1 className="projects-title">Projects</h1>
      <ProjectCard
        imgUrl="src/assets/images/Pokedex.png"
        title="Pokedex"
        description="Pokédex Project, an interactive hub for exploring the diverse world of Pokémon. Dive into the various types of Pokémon."
        toolTitle="Developer Tools"
        tool={["Html", "CSS", "Javascript", "Github Pages"]}
        Github="Github"
        Project="View Project"
      />
    </section>
  );
}
