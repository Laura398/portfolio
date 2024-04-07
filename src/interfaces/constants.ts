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
        link: "https://www.ayakashi-project.lauramathieu.com/"
    },
    {
        id: 2,
        name: "JDR-generator",
        type: "School project",
        image: "/assets/sites/jdrg.png",
        icon: "/assets/sites/jdrg-phone.png",
        link: ""
    },
    {
        id: 3,
        name: "Reservia",
        type: "School project",
        image: "/assets/sites/reservia.png",
        icon: "/assets/sites/reservia-phone.png",
        link: "https://laura398.github.io/LauraMathieu_2_08032021/"
    },
    {
        id: 4,
        name: "ohmyfood!",
        type: "School project",
        image: "/assets/sites/ohmyfood.png",
        icon: "/assets/sites/ohmyfood-phone.png",
        link: "https://laura398.github.io/LauraMathieu_3_05032021/"
    }
];

export const STACK = [
    {
        title: "Front-End",
        logos: [
            {
                title: "JavaScript",
                logo: "/assets/stack/js-logo.png"
            },
            {
                title: "TypeScript",
                logo: "/assets/stack/ts-logo.png"
            },
            {
                title: "React",
                logo: "/assets/stack/react-logo.png"
            },
            {
                title: "Angular",
                logo: "/assets/stack/angular-logo.png"
            },
            {
                title: "Vue",
                logo: "/assets/stack/vue-logo.png"
            },
            {
                title: "Meteor",
                logo: "/assets/stack/meteor-logo.png"
            }
        ]
    },
    {
        title: "Back-End",
        logos: [
            {
                title: "Node",
                logo: "/assets/stack/node-logo.png"
            },
            {
                title: "Nest",
                logo: "/assets/stack/nest-logo.png"
            },
            {
                title: "PHP",
                logo: "/assets/stack/php-logo.png"
            },
            {
                title: "Laravel",
                logo: "/assets/stack/laravel-logo.png"
            },
            {
                title: "Python",
                logo: "/assets/stack/python-logo.png"
            },
            {
                title: "Django",
                logo: "/assets/stack/django-logo.png"
            }
        ]
    },
    {
        title: "Database",
        logos: [
            {
                title: "MongoDB",
                logo: "/assets/stack/mongo-logo.png"
            },
            {
                title: "MySQL",
                logo: "/assets/stack/mysql-logo.png"
            },
            {
                title: "PostgreSQL",
                logo: "/assets/stack/postgres-logo.png"
            }
        ]
    },
    {
        title: "DevOps",
        logos: [
            {
                title: "Docker",
                logo: "/assets/stack/docker-logo.png"
            },
            {
                title: "Kubernetes",
                logo: "/assets/stack/kubernetes-logo.png"
            },
            {
                title: "Render",
                logo: "/assets/stack/render-logo.png"
            },
            {
                title: "GitHub",
                logo: "/assets/stack/github-logo.png"
            },
            {
                title: "GitLab",
                logo: "/assets/stack/gitlab-logo.png"
            }
        ]
    }

]