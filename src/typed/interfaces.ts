import { linkType, parentType, sectionType, severityType } from "./types";

export interface navigationLinksInterface {
    section: sectionType,
    parent: parentType,
    order: number,
    name: string,
    link: linkType,
    icon: string | undefined,
    child: number[] | null
}

export interface arrowExpandProps{
    collapsed: boolean
}

export interface NavLinkItemProps {
    name: string,
    child?: number[] | null,
    selected?: boolean,
    icon?: JSX.Element,
    path?: `/${string}`
}

export interface NavigationBarProps {
    children?: React.ReactNode
}

export interface NavBarProviderProps{
    children: React.ReactNode
}

export interface openDrawerInterface {
    open: boolean,
    openAlert: boolean,
    openCreateUserModal: boolean,
    activeLinkNavbar: number,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenCreateUserModal: React.Dispatch<React.SetStateAction<boolean>>,
    setActiveLinkNavbar: React.Dispatch<React.SetStateAction<number>>,
}

export interface HeaderPagesProps {
    title: string,
    subtitle?: string | null,
    breadcrumbs: string[] | null,
    buttonName?: string | null,
    buttonIcon?: string | undefined,
    buttonAction?: () => void | null,
}

export interface chipsCardBoardType {
    all: number,
    testing: number,
    tested:number
}

export interface CardBoardProps {
    title: string, 
    chips: chipsCardBoardType, 
    lastactualization: string, 
    state: string
}

export interface AlertProps {
    label: string,
    severity: severityType
}

export interface createUserFormData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userRol: number
}