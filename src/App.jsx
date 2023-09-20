import "./App.css";
import { LayoutBase } from "./Layoutbase/Layoutbase";
import { About } from "./Sections/About/About";
import { HomeSection } from "./Sections/Home/Home";
import { Pokedex } from "./Sections/Projects/Pokedex/Pokedex";
import { TodoList } from "./Sections/Projects/Todolist/Todolist";
import { Skills } from "./Sections/Skills/Skills";

function App() {
  return (
    <div>
      <LayoutBase>
        <HomeSection />
        <About />
        <Skills />
        <Pokedex />
        <TodoList />
      </LayoutBase>
    </div>
  );
}

export default App;
