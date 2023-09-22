import "./projectcard.css";

/**
 * Card to show content
 *
 * @param {{
 *   title: string,
 *   imgUrl: string,
 *   description: string,
 *   toolTitle: string,
 *   tool: string[],
 *   Github: string,
 *   Project: string,
 *   linkGithub: string,
 *   linkProject: string
 * }} properties
 */
export function ProjectCard(properties) {
  const {
    title,
    imgUrl,
    description,
    toolTitle,
    tool,
    Github,
    Project,
    linkGithub,
    linkProject,
  } = properties;

  const openGithubLinkInNewTab = () => {
    window.open(linkGithub, "_blank");
  };

  const openProjectLinkInNewTab = () => {
    window.open(linkProject, "_blank");
  };

  return (
    <div className="card-body">
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <h3 className="card-tool-title">{toolTitle}</h3>
        <ul>
          {tool.map((tools, index) => (
            <li key={index} className="tools">
              {tools}
            </li>
          ))}
        </ul>
        <div className="card-buttons">
          <button className="github-btn" onClick={openGithubLinkInNewTab}>
            {Github}
          </button>
          <button className="project-btn" onClick={openProjectLinkInNewTab}>
            {Project}
          </button>
        </div>
      </div>

      <div className="card-img-body">
        <img className="card-img" src={imgUrl} alt="" />
      </div>
    </div>
  );
}
