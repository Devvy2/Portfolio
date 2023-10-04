import { ProjectCard } from "../../../Components/Projectcard/Projectcard";
import "./pokedex.css";
import { useTranslation } from "react-i18next";

export function Pokedex() {
  const { t } = useTranslation("global");
  return (
    <section className="Pokedex-section">
      <h1 className="projects-title">{t("Section-project-title")}</h1>
      <ProjectCard
        imgUrl="/images/Pokedex.png"
        title="Pokedex"
        description={t("Pokedex-description")}
        toolTitle={t("Developer-tools-title")}
        tool={["Html", "CSS", "Javascript", "Netlify"]}
        Github="Github"
        Project={t("Projects-btn")}
        linkGithub="https://github.com/Devvy2/APIoppgave"
        linkProject="https://fluffy-peony-a9818c.netlify.app/"
      />
    </section>
  );
}
