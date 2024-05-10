import { useTranslation } from "react-i18next";
import { PROJECTS } from "../../../../interfaces/constants";
import "./Carousel.scss";

export default function Carousel() {
  const { t } = useTranslation();

  const projects = PROJECTS;

  return (
    <div className="container">
      {projects.map((project, index) => {
        const type = t(project.type);
        const type2 = t(project.type2);
        return (
          <a key={index} href={project.link} target="_blank">
            <div className="content">
              <h2>{project.name}</h2>
              <p>
                {type} - {type2}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
