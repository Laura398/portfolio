import { PROJECTS } from "../../../interfaces/constants";
import "./Carousel.scss"

export default function Carousel() {
    const projects = PROJECTS;
    return (
        <div className="container">
            {projects.map((project, index) => (
                <a key={index} href={project.link} target="_blank">
                    <div className="content">
                        <h2>{project.name}</h2>
                        <span>{project.type}</span>
                    </div>
                </a>
            ))}
        </div>
    )
}