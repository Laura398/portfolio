import { useTranslation } from "react-i18next";
import Scroll from "../../../../components/buttons/Scroll";
import { PROJECTS } from "../../../../interfaces/constants";
import { CENTER_MARGIN } from "../../../../interfaces/constants";
import "./Carousel.scss"

export default function Carousel() {
    const { t } = useTranslation();
    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }
    
    const projects = PROJECTS;

    const isDesktop = window.screen.width > 600;

    return (
        <div className="container">
            {projects.map((project, index) => {
                const type = t(project.type);
                return (
                    <a key={index} href={project.link} target="_blank">
                        <div className="content">
                            <h2>{project.name}</h2>
                            <span>{type}</span>
                        </div>
                    </a>
                )
            } )}
            {isDesktop && <Scroll trigger={true} margin={margin} scrollTo="contact" />}
        </div>
    )
}