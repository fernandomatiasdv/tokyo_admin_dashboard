import { CardBoardProps } from "../../typed/interfaces";
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
        },
        commonButton:{
            save: {
                label:"Guardar", 
                icon: "save",
                color: "primary",
                variant: "contained"
            },
            cancel: {
                label:"Cancelar", 
                icon: null,
                color: "primary",
                variant: "outlined"
            }
        },
        alertUserManagment:{
            error: "Ya no pudes sumar mas usuarios a tu cuenta, para hacerlo debes mejorar tu plan actual",
            icon: "errorOutline",
            plan: { label: "Mejorar el plan", action: () => alert("Mejorar el plan") } 
        },
        user:{
            create: {
                avatar: {
                    alt: "new User",
                    pic: "https://i.pinimg.com/236x/bf/c6/7e/bfc67e1bcfd0e331ea9587fbdcaeacac.jpg"
                },
                title: "Agregar nuevo usuario",
                pic: "https://i.pinimg.com/564x/5b/0c/0d/5b0c0d32dfa068ea8c3e74c56ee138ee.jpg",
                form:{
                    firstname: "Primer nombre",
                    lastName: "Apellido",
                    email: "Email",
                    password: "Contraseña",
                    userRole: "Rol del usuario",
                    userRoleSelect: [
                        { value: 1, label: "Administrador"} ,
                        { value: 2, label: "Usuario Editor"}
                    ]
                }
            }
        },
        userTable:{
            columns: ["Avatar", "Nombre Real", "Nombre de usuario", "Email", "Posteos", "Rol", "Acciones"],
            rows: [
                {
                    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4W3b79361tjcn957BVLnLTxupx155dDSaEwiso3Q-EOXl5NkqLKuUlUuOexCibKFE-9s&usqp=CAU",
                    realName: "Noelia Pintos",
                    userName: "nlourdes",
                    email: "nlourdes.pintos@gmail.com",
                    posts: 69,
                    rol: 2, // 1: Administrador (Primary)   2: Usuario editor (Success)
                    actions: [{
                        pen: () => alert("Editar"),
                        trash: () => alert("Eliminar")
                    }]
                },{
                    pic: "https://i.pinimg.com/236x/be/2d/cd/be2dcd2f8d9c1364cca76c63cd9da2a9.jpg",
                    realName: "Fernando del Valle",
                    userName: "fer_saikyo",
                    email: "fernandomatiasdv@gmail.com",
                    posts: 10,
                    rol: 1,
                    actions: [{
                        pen: () => alert("Editar"),
                        trash: () => alert("Eliminar")
                    }]
                },{
                    pic: "https://i.pinimg.com/236x/bf/c6/7e/bfc67e1bcfd0e331ea9587fbdcaeacac.jpg",
                    realName: "Emilia Marnes",
                    userName: "emar",
                    email: "emily@hotmail.com",
                    posts: 25,
                    rol: 2,
                    actions: [{
                        pen: () => alert("Editar"),
                        trash: () => alert("Eliminar")
                    }]
                },
            ]
        }
    },
    pages:{
        board: {
            title: "Tableros",
            subtitle: "En esta pantalla podrás visualizar y gestionar tus tableros de seguimiento",
            breadcrumbs: null,
            buttonName: "Nuevo Tablero",
            buttonIcon: "add",
            buttonAction: ()=>alert('Nuevo Tablero')
        },
        fonts: {
            title: "Fuentes",
            subtitle: "Aplicaciones, Snippets y Fuentes de información conectadas a tu cuenta",
            breadcrumbs: null,
            buttonName: "Explorar Marketplace",
            buttonIcon: undefined,
            buttonAction: ()=>alert('Explorar Marketplace')
        },
        marketplacefonts: {
            title: "Marketplace de Fuentes",
            subtitle: "Aplicaciones, Snippets y Fuentes de información que puedes conectar a tu cuenta",
            breadcrumbs: null,
            buttonName: null,
            buttonIcon: undefined,
            buttonAction: ()=>null
        },
        userManagement: {
            title: "Gestión de usuarios",
            subtitle: "En esta pantalla podrás agregar, editar o quitar usuarios de tu equipo",
            breadcrumbs: null,
            buttonName: "Agregar usuario",
            buttonIcon: "add",
            buttonAction: ()=>alert("Gestion de usuarios")
        }
    }
}

const cardsBoard:CardBoardProps[] = [{
    title: "Tablero de seguimiento de Boletín Oficial de la República Argentina",
    chips: {
        all: 4,
        testing: 2,
        tested: 9
    },
    lastactualization: "Hace 2 horas",
    state: "Publicado"
}]

const navigationLinks:navigationLinksInterface[] = [
    {
        parent: 0,
        section: 1,
        order: 1,
        name: "Tableros",
        link: "/tableros",
        icon: "dashboard",
        child: [8,9]
    },
    {
        parent: 0,
        section: 1,
        order: 2,
        name: "Fuentes",
        link: "/fuentes",
        icon: "memory",
        child: []
    },
    {
        parent: 0,
        section: 1,
        order: 3,
        name: "Tracking",
        link: "/tracking",
        icon: "track-changes",
        child: []
    },
    {
        parent: 0,
        section: 1,
        order: 4,
        name: "Mis datos",
        link: "/mis-datos",
        icon: "person-pin",
        child: []
    },
    {
        parent: 0,
        section: 1,
        order: 5,
        name: "Preferencias",
        link: "/preferencias",
        icon: "settings",
        child: []
    },
    {
        parent: 0,
        section: 1,
        order: 6,
        name: "Usuarios",
        link: "/usuarios",
        icon: "supervised-user-circle",
        child: [10]
    },
    {
        parent: 0,
        section: 1,
        order: 7,
        name: "Cerrar sesión",
        link: "/cerrar-sesion",
        icon: "login",
        child: []
    },
    {
        parent: 1,
        section: 1,
        order: 8,
        name: "Mis Tableros",
        link: "/mis-tableros",
        icon: undefined,
        child: []
    },
    {
        parent: 1,
        section: 1,
        order: 9,
        name: "Tablero de seguimiento",
        link: "/tablero-seguimiento",
        icon: undefined,
        child: []
    }
    ,
    {
        parent: 1,
        section: 1,
        order: 10,
        name: "Gestión de usuarios",
        link: "/gestion-usuarios",
        icon: undefined,
        child: []
    }
]


export {drawerWidth, cardsBoard, sentences, drawerHeight, navigationLinks}