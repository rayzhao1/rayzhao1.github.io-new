import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/home',
        icon: AiOutlineHome,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />
    },
    {
        title: 'Week 1',
        path: '/week1',
        subnav: [
            {
                title: 'Functions',
                path: '/week1/functions'
            },
            {
                title: 'Iteration',
                path: '/week1/iteration'
            }
        ]
    },
    {
        title: 'Week 2',
        path: '/week2',
        subnav: [
            {
                title: 'Functions',
                path: '/week2/functions'
            },
            {
                title: 'Iteration',
                path: '/week2/iteration'
            }
        ]
    },
    {
        title: 'Week 3',
        path: '/week3',
    },
    {
        title: 'Week 4',
        path: '/week4',
    },
    {
        title: 'Week 5',
        path: '/week5',
    },
    {
        title: 'Week 6',
        path: '/week6',
    }
    
];
