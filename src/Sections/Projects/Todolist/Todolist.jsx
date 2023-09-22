import { ProjectCard } from "../../../Components/Projectcard/Projectcard";
import "./todolist.css";

export function TodoList() {
  return (
    <section className="todolist-section">
      <ProjectCard
        imgUrl="src/assets/images/Todolist.png"
        title="Todo list"
        description="Introducing the JS TaskMaster Your Customized JavaScript Todo List!"
        toolTitle="Developer Tools"
        tool={["Html", "CSS", "Javascript", "Github Pages"]}
        Github="Github"
        Project="View Project"
        linkGithub="https://github.com/Devvy2/Todo-list"
        linkProject="https://devvy2.github.io/Todo-list/"
      />
    </section>
  );
}
