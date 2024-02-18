import Background from "./Background";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';import "./Home.scss";
import { scrollTo } from "../../../helpers/scroll-to";

export default function Home() {
    const htmlString = "<Laura Mathieu />"

    function scrollToAbout() {
        scrollTo("about");
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
                <div className="card">
                    <p className="go-down">
                        <a onClick={scrollToAbout}>
                            <ExpandCircleDownIcon className="arrow" fontSize="large" sx={{ color: "#61dafb" }} />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}