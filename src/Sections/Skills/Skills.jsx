import "./skills.css";

export function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-body">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-img-body">
          <div className="skills-img-row1">
            <div>
              <img src="public/images/html 1.png" alt="" />
              <p>HTML 5</p>
            </div>
            <div>
              <img src="public/images/css 1.png" alt="" />
              <p>CSS 3</p>
            </div>
            <div>
              <img src="public/images/javascript.png" alt="" />
              <p>Javascript</p>
            </div>
            <div>
              <img src="public/images/react.png" alt="" />
              <p>React</p>
            </div>
          </div>

          <div className="skills-img-row2">
            <div>
              <img src="public/images/Figma.png" alt="" />
              <p>Figma</p>
            </div>
            <div>
              <img src="public/images/github.png" alt="" />
              <p>Github</p>
            </div>
            <div>
              <img src="public/images/Visual studio code.png" alt="" />
              <p>Visual Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
