import { navigationLinksInterface } from "../../typed/interfaces";
import { widthHeightType } from "../../typed/types";

const drawerWidth: widthHeightType = 240;
const drawerHeight: widthHeightType = 64;

const sentences = {
    layouts: {
        appBar: {
            button: "Mejorar plan",
            avatar: {
                name: "Randy Sinderman",
                pic: "https://www.tuasesordemoda.com/wp-content/uploads/2022/11/corte-de-pelo-olivia-wilde-cara-cuadrada.jpeg",
                bussiness: 'Empresa X'
            },
            notifications: 0
        }
    },
    components:{
        cardboard:{
            lastactualization: "Última actualización",
            state: "Estado"
        }
    },
    pages:{
        board: {
            title: "Tableros",
            subtitle: "En esta pantalla podrás visualizar y gestionar tus tableros de seguimiento",
            breadcrumbs: null,
            buttonName: "Nuevo Tablero",
            buttonIcon: "Add",
            buttonAction: ()=>alert('Nuevo Tablero')
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