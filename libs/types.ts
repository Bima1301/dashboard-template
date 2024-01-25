import { IconType } from "react-icons"

export type menuType = {
    name: string,
    path: string,
    icon?: IconType | undefined,
    children?: menuType[],
    isStartDevider?: boolean,
    isEndDevider?: boolean,
    deviderName?: string,
}