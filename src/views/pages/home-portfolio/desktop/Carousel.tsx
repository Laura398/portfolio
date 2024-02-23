import Scroll from "../../../../components/buttons/Scroll";
import { PROJECTS } from "../../../../interfaces/constants";
import { CENTER_MARGIN } from "../../../../interfaces/constants";
import "./Carousel.scss"

export default function Carousel() {
    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }
    
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
            <Scroll trigger={true} margin={margin} scrollTo="contact" />
        </div>
    )
}