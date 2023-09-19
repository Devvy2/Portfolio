import "./skills.css";

export function Skills() {
  return (
    <div className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-img-body">
        <div className="skills-img-row1">
          <img src="src/assets/images/html 1.png" alt="" />
          <img src="src/assets/images/css 1.png" alt="" />
          <img src="src/assets/images/javascript.png" alt="" />
          <img src="src/assets/images/react.png" alt="" />
        </div>
        <div className="skills-img-row2">
          <img src="src/assets/images/Figma.png" alt="" />
          <img src="src/assets/images/github.png" alt="" />
          <img src="src/assets/images/Visual studio code.png" alt="" />
        </div>
      </div>
    </div>
  );
}
