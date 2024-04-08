import "./About.scss";
import { CENTER_MARGIN } from "../../../interfaces/constants";
import Scroll from "../../../components/buttons/Scroll";
import MeCard from "./MeCard";
import CourseCard from "./CourseCard";

export default function About() {
    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }

    const isDesktop = window.screen.width > 600;

    return (
        <div id="about">
            <MeCard />
            <CourseCard />
            {isDesktop && <Scroll trigger={true} margin={margin} scrollTo="stack" />}
        </div>
    )
}