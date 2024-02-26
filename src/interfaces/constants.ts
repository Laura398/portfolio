import { Project } from "./types";

export const CENTER_MARGIN = {
    position: "absolute",
    left: "50%",
    transform: true,
    zIndex: 1,
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Ayakashi Project",
        type: "Personnal project",
        image: "/assets/sites/ayakashi.png",
        icon: "/assets/sites/ayakashi-phone.png",
        dates: "2024, January - 2024, February",
        link: "https://ayakashi-project.onrender.com/"
    },
    {
        id: 2,
        name: "JDR-generator",
        type: "School project",
        image: "/assets/sites/jdrg.png",
        icon: "/assets/sites/jdrg-phone.png",
        dates: "2023, April",
        link: ""
    },
    {
        id: 3,
        name: "Reservia",
        type: "School project",
        image: "/assets/sites/reservia.png",
        icon: "/assets/sites/reservia-phone.png",
        dates: "2021, March",
        link: "https://laura398.github.io/LauraMathieu_2_08032021/"
    },
    {
        id: 4,
        name: "ohmyfood!",
        type: "School project",
        image: "/assets/sites/ohmyfood.png",
        icon: "/assets/sites/ohmyfood-phone.png",
        dates: "2021, April",
        link: "https://laura398.github.io/LauraMathieu_3_05032021/"
    }
];

export const STACK = [
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
        title: "Databases",
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