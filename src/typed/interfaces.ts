import { linkType, parentType, sectionType } from "./types";

export interface navigationLinksInterface {
    section: sectionType,
    parent: parentType,
    order: number,
    name: string,
    link: linkType,
    icon: string | undefined
}

export interface arrowExpandProps{
    collapsed: boolean
}

export interface NavLinkItemProps {
    name: string,
    child?: number[],
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
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
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