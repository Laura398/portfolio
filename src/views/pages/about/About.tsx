import "./About.scss";
import AboutBackground from "./Background";
import { CENTER_MARGIN } from "../../../interfaces/constants";
import Scroll from "../../../components/buttons/Scroll";

export default function About() {

    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }

    return (
        <div id="about">
            <AboutBackground />

            <div id="about-container" className="about-element">
                <h1>About Me</h1>
                <img src="/assets/avatar2.jpeg" alt="Avatar" />
                <p>I'm Laura Mathieu, a web developer based in France. I'm currently a student at the school Ynov Informatique in Toulouse, studying web development. I'm passionate about using technology to solve problems and improve the world around us. I'm currently seeking opportunities to work on projects that make a positive impact on the world.</p>
            </div>

            <div id="course" className="about-element">
                <h1>Course</h1>
                <div id="stack-container">
                    <div id="experience">
                        <h2>💼 Experience</h2>
                        <p>3 years apprenticeship in Web Development in Upschool and Ynov Informatique</p>
                    </div>
                    <div id="certifications">
                        <h2>📚 Certifications</h2>
                        <p>Masters in Web Development - Ynov Informatiques</p>
                        <p>RNCP Title Web Developer Level 5 - Openclassrooms</p>
                    </div>
                </div>
            </div>

            <Scroll trigger={true} margin={margin} scrollTo="stack" />
        </div>
    )
}