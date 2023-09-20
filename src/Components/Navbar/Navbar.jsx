import "./navbar.css";

export function Navbar() {
  return (
    <div className="navbar-body">
      <nav className="nav-btns">
        <button className="home-btn">Home</button>
        <button className="about-btn">About</button>
        <button className="skills-btn">Skills</button>
        <button className="projects-btn">Projects</button>
        <button className="contact-btn">Contact</button>
      </nav>
    </div>
  );
}
