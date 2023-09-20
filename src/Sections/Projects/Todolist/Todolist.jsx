import { ProjectCard } from "../../../Components/Projectcard/Projectcard";

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
      />
    </section>
  );
}
