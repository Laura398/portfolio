import Scroll from "../../../components/buttons/Scroll";
import RowCard from "./Card";
import { CENTER_MARGIN, STACK } from "../../../interfaces/constants";
import "./Stack.scss";

export default function Stack() {
    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }
    
    return (
        <div id="stack">
            <h1>My Stack</h1>
            <div id="stack-container">
                {STACK.map((item, index) => {
                    return (
                        <div id={item.title.toLowerCase()} key={index} className="stack-element">
                            <div id={`stack-${item.title.toLowerCase()}`}>
                                <RowCard item={item} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <Scroll trigger={true} margin={margin} scrollTo="home-portfolio" />
        </div>
    )
}