import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  // Function to handle smooth scrolling to the target section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar-body">
      <ul className="nav-btns">
        <li>
          <NavLink
            to="/"
            className="home-btn"
            onClick={() => {
              navigate("/");
              scrollToSection("home");
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="about-btn"
            onClick={() => {
              navigate("/about");
              scrollToSection("about");
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="skills-btn"
            onClick={() => {
              navigate("/skills");
              scrollToSection("skills");
            }}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="projects-btn"
            onClick={() => {
              navigate("/projects");
              scrollToSection("projects");
            }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="contact-btn"
            onClick={() => {
              navigate("/contact");
              scrollToSection("contact");
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
