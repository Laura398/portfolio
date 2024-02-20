import Scroll from "../../../components/buttons/Scroll";
import RowCard from "./Card";
import { CENTER_MARGIN } from "../../../interfaces/constants";
import "./Stack.scss";

const data = [
    {
        title: "Front-End",
        logos: [
            "/assets/stack/js-logo.png",
            "/assets/stack/ts-logo.png",
            "/assets/stack/react-logo.png",
            "/assets/stack/angular-logo.png",
            "/assets/stack/vue-logo.png",
            "/assets/stack/meteor-logo.png"
        ]
    },
    {
        title: "Back-End",
        logos: [
            "/assets/stack/node-logo.png",
            "/assets/stack/nest-logo.png",
            "/assets/stack/php-logo.png",
            "/assets/stack/laravel-logo.png",
            "/assets/stack/python-logo.png",
            "/assets/stack/django-logo.png"
        ]
    },
    {
        title: "Database",
        logos: [
            "/assets/stack/mongo-logo.png",
            "/assets/stack/mysql-logo.png",
            "/assets/stack/postgres-logo.png"
        ]
    },
    {
        title: "DevOps",
        logos: [
            "/assets/stack/docker-logo.png",
            "/assets/stack/kubernetes-logo.png",
            "/assets/stack/render-logo.png",
            "/assets/stack/github-logo.png",
            "/assets/stack/gitlab-logo.png"
        ]
    }

]

export default function Stack() {
    const margin = {
        ...CENTER_MARGIN,
        bottom: "2%",
    }
    
    return (
        <div id="stack">
            <h1>My Stack</h1>
            <div id="stack-container">
                {data.map((item, index) => {
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