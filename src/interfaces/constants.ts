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