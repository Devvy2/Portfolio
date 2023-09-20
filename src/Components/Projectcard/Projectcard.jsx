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
 *   Project: string
 * }} properties
 */
export function ProjectCard(properties) {
  const { title, imgUrl, description, toolTitle, tool, Github, Project } =
    properties;

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
          <button className="github-btn">{Github}</button>
          <button className="project-btn">{Project}</button>
        </div>
      </div>

      <div className="card-img-body">
        <img className="card-img" src={imgUrl} alt="" />
      </div>
    </div>
  );
}
