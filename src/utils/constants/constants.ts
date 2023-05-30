import { navigationLinksInterface } from "../../typed/interfaces";
import { widthHeightType } from "../../typed/types";

const drawerWidth: widthHeightType = 240;
const drawerHeight: widthHeightType = 64;

const sentences = {
    layouts: {
        appBar: {
            button: "Mejorar plan"
        }
    }
}

const navigationLinks:navigationLinksInterface[] = [
    {
        parent: 0,
        section: 1,
        order: 1,
        name: "Tableros",
        link: "/tableros",
        icon: "dashboard"
    },
    {
        parent: 0,
        section: 1,
        order: 2,
        name: "Fuentes",
        link: "/fuentes",
        icon: "memory"
    },
    {
        parent: 0,
        section: 1,
        order: 3,
        name: "Tracking",
        link: "/tracking",
        icon: "track-changes"
    },
    {
        parent: 0,
        section: 1,
        order: 4,
        name: "Mis datos",
        link: "/mis-datos",
        icon: "person-pin"
    },
    {
        parent: 0,
        section: 1,
        order: 5,
        name: "Preferencias",
        link: "/preferencias",
        icon: "settings"
    },
    {
        parent: 0,
        section: 1,
        order: 6,
        name: "Usuarios",
        link: "/usuarios",
        icon: "supervised-user-circle"
    },
    {
        parent: 0,
        section: 1,
        order: 7,
        name: "Cerrar sesión",
        link: "/cerrar-sesion",
        icon: "login"
    }
]


export {drawerWidth, sentences, drawerHeight, navigationLinks}