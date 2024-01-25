import { MdEvent, MdOutlineDashboard, MdOutlineFeaturedPlayList } from "react-icons/md";
import { menuType } from "./types";
import { GrAnalytics } from "react-icons/gr";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { RiFileHistoryLine, RiGalleryLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";


export const menuList: menuType[] = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: MdOutlineDashboard
    },
    {
        name: 'Analytics',
        path: '/analytics',
        icon: GrAnalytics,
        children: [
            {
                name: 'Reports',
                path: '/analytics/reports',
                icon: TbReport,
            },
            {
                name: "Events",
                path: '/analytics/events',
                icon: MdEvent,
            }
        ]
    },
    {
        name: "Users",
        path: "/users",
        icon: FaRegUser
    },

    {
        name: "",
        path: "",
        isStartDevider: true,
        deviderName: "General"
    },
    {
        name: "Build",
        path: "/build",
        icon: FaRegBuilding,
    },
    {
        name: 'Gallery',
        path: '/gallery',
        icon: RiGalleryLine,
        children: [
            {
                name: 'Facilities',
                path: '/gallery/facilities',
                icon: MdOutlineFeaturedPlayList,
            },
            {
                name: "History",
                path: '/gallery/history',
                icon: RiFileHistoryLine,
            }
        ]
    },
    {
        name: "",
        path: "",
        isEndDevider: true,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: GoGear
    },
]