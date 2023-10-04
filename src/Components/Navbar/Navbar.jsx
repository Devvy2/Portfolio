import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState
import { LanguageToggler } from "../LanguageToggler/Languagetoggler";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

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

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar-body ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-logo"></div>
      <div className="nav-items-container">
        <LanguageToggler />
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-btns ${menuOpen ? "show-menu" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="home-btn"
              onClick={() => {
                navigate("/");
                scrollToSection("home");
                toggleMenu(); // Close menu when a link is clicked
              }}
            >
              {t("Nav-home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="about-btn"
              onClick={() => {
                navigate("/about");
                scrollToSection("about");
                toggleMenu();
              }}
            >
              {t("Nav-about")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/skills"
              className="skills-btn"
              onClick={() => {
                navigate("/skills");
                scrollToSection("skills");
                toggleMenu();
              }}
            >
              {t("Nav-skills")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className="projects-btn"
              onClick={() => {
                navigate("/projects");
                scrollToSection("projects");
                toggleMenu();
              }}
            >
              {t("Nav-projects")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-form"
              className="contact-btn"
              onClick={() => {
                navigate("/contact-form");
                scrollToSection("contact-form");
                toggleMenu();
              }}
            >
              {t("Nav-contact")}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
