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