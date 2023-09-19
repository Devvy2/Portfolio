import "./App.css";
import { LayoutBase } from "./Layoutbase/Layoutbase";
import { About } from "./Sections/About/About";
import { HomeSection } from "./Sections/Home/Home";
import { Skills } from "./Sections/Skills/Skills";

function App() {
  return (
    <div>
      <LayoutBase>
        <HomeSection />
        <About />
        <Skills />
      </LayoutBase>
    </div>
  );
}

export default App;
