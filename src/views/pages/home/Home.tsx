import Background from "./Background";
import "./Home.scss";
import Scroll from "../../../components/buttons/Scroll";
import { CENTER_MARGIN } from "../../../interfaces/constants";

export default function Home() {
    const htmlString = "<Laura Mathieu />"

    const margin = {
        ...CENTER_MARGIN,
        bottom: "20%",
    }
    
    return (
        <div className="bubbles">
            <Background />

            <div className="home">
                <div className="avatar">
                    <img src="/assets/avatar.jpeg" alt="React logo" />
                </div>
                <a className="name">
                    <h1>{htmlString}</h1>
                </a>
                <a className="job">
                    <h2>Web Developer FullStack</h2>
                </a>
            </div>
            <Scroll trigger={true} margin={margin} scrollTo="about" />
        </div>
    )
}