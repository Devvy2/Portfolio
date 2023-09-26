import "./App.css";
import { LayoutBase } from "./Layoutbase/Layoutbase";
import { About } from "./Sections/About/About";
import { ContactUs } from "./Sections/Contact/Contact";
import { HomeSection } from "./Sections/Home/Home";
import { Pokedex } from "./Sections/Projects/Pokedex/Pokedex";
import { TodoList } from "./Sections/Projects/Todolist/Todolist";
import { Skills } from "./Sections/Skills/Skills";

function App() {
  return (
    <div>
      <LayoutBase>
        <div id="home">
          <HomeSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Pokedex />
          <TodoList />
        </div>
        <div id="contact-form">
          <ContactUs />
        </div>
      </LayoutBase>
    </div>
  );
}

export default App;
