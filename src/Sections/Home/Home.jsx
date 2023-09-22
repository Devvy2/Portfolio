import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css";

export function HomeSection() {
  const navigate = useNavigate(); // Get the navigate function

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
        <h3 className="intro-line1">Hi, my name is</h3>
        <h1 className="intro-line2">Joakim Sørenes</h1>
        <h1 className="intro-line3">I&apos;m a Frontend Developer</h1>
        <Link
          to="/projects"
          className="view-projects-btn"
          onClick={() => {
            navigate("/projects");
            scrollToSection("projects");
          }}
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
