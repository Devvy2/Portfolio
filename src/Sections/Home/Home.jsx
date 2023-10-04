import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { useTranslation } from "react-i18next";

export function HomeSection() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // Define your scrollToSection function
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home-section-body">
      <div className="home-content">
        <h3 className="intro-line1">{t("Hello")}</h3>
        <h1 className="intro-line2">{t("Name")}</h1>
        <h1 className="intro-line3">{t("Profession")}</h1>
        <Link
          to="/projects"
          className="view-projects-btn"
          onClick={() => {
            navigate("/projects");
            scrollToSection("projects");
          }}
        >
          {t("Header-btn")}
        </Link>
      </div>
    </div>
  );
}
