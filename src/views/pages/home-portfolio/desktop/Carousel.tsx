import { useState } from "react";
import { useTranslation } from "react-i18next";
import ResponsiveModal from "../../../../components/modal/Modal";
import { PROJECTS } from "../../../../interfaces/constants";
import "./Carousel.scss";

export default function Carousel() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const projects = PROJECTS;

  return (
    <div className="container">
      {projects.map((project, index) => {
        const type2 = t(project.type2);

        return project.mobile ? (
            <a key={index} onClick={() => setOpen(true)}>
              <div className="content">
                <h2>{project.name}</h2>
                <p>{type2}</p>
              </div>
            </a>
        ) : (
          <a key={index} href={project.link} target="_blank">
            <div className="content">
              <h2>{project.name}</h2>
              <p>{type2}</p>
            </div>
          </a>
        );
      })}
      <ResponsiveModal
              open={open}
              setOpen={setOpen}
              link={projects[2].link}
              app={projects[2].app}
            />
    </div>
  );
}
