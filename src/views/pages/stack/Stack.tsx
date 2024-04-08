import Scroll from "../../../components/buttons/Scroll";
import RowCard from "./Card";
import { CENTER_MARGIN, STACK } from "../../../interfaces/constants";
import "./Stack.scss";
import { useTranslation } from "react-i18next";

export default function Stack() {
    const { t } = useTranslation();
    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }
    const isDesktop = window.screen.width > 600;
    
    return (
        <div id="stack">
            <h1>{t('myStack')}</h1>
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
            {isDesktop && <Scroll trigger={true} margin={margin} scrollTo="home-portfolio" />}
        </div>
    )
}