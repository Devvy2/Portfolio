import "./skills.css";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation("global");
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">{t("Skills")}</h1>
        <div className="skills-img-body">
          <div>
            <img src="/images/html 1.png" alt="" />
            <p>HTML 5</p>
          </div>
          <div>
            <img src="/images/css 1.png" alt="" />
            <p>CSS 3</p>
          </div>
          <div>
            <img src="/images/javascript.png" alt="" />
            <p>Javascript</p>
          </div>
          <div>
            <img src="/images/react.png" alt="" />
            <p>React</p>
          </div>
          <div>
            <img src="/images/Figma.png" alt="" />
            <p>Figma</p>
          </div>
          <div>
            <img src="/images/github.png" alt="" />
            <p>Github</p>
          </div>
          <div>
            <img src="/images/Visual studio code.png" alt="" />
            <p>Visual Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
