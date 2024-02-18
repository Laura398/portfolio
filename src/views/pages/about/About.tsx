import "./About.scss";
import AboutBackground from "./Background";

export default function About() {
    return (
        <div id="about">
            <AboutBackground />
            <div id="about-container" className="about-element">
                <h1>About Me</h1>
                <img src="/assets/avatar2.jpeg" alt="Avatar" />
                <p>I'm Laura Mathieu, a web developer based in France. I'm currently a student at the school Ynov Informatique in Toulouse, studying web developement. I'm passionate about using technology to solve problems and improve the world around us. I'm currently seeking opportunities to work on projects that make a positive impact on the world.</p>
            </div>
            <div id="stack" className="about-element"></div>
        </div>
    )
}