import { ProjectCard } from "../../../Components/Projectcard/Projectcard";
import "./todolist.css";
import { useTranslation } from "react-i18next";

export function TodoList() {
  const { t } = useTranslation("global");
  return (
    <section className="todolist-section">
      <ProjectCard
        imgUrl="/images/Todolist.png"
        title={t("Todo-list-title")}
        description={t("Todolist-description")}
        toolTitle={t("Developer-tools-title")}
        tool={["Html", "CSS", "Javascript", "Github Pages"]}
        Github="Github"
        Project={t("Projects-btn")}
        linkGithub="https://github.com/Devvy2/Todo-list"
        linkProject="https://devvy2.github.io/Todo-list/"
      />
    </section>
  );
}
