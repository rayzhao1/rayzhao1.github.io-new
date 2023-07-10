import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";
import logo from '../images/61yayy.png'

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: AiOutlineHome,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />
    },
    {
        title: 'Practice',
        path: '/practice'
    },
    {
        title: 'Demos',
        path: '/demo',
        subnav: [
            {
                title: 'Environment Diagrams',
                path: '/demo/env'
            },
            {
                title: 'Tree Recursion',
                path: '/demo/nonplussed'
            },
            {
                title: 'Generators',
                path: '/week2/generator'
            }
        ]
    },
    {
        title: 'Week 1',
        path: '/week1',
        subnav: [
            {
                title: 'Introduction',
                path: '/week1/intro'
            },
            {
                title: 'Variables and Functions',
                path: '/week1/basics'
            },
            {
                title: 'Control & Environment Diagrams',
                path: '/week1/control'
            }
        ]
    },
    {
        title: 'Week 2',
        path: '/week2',
        subnav: [
            {           
                title: 'Higher-Order Functions',
                path: '/week2/hofs'
            },
            {
                title: 'Recursion',
                path: '/week2/rec'
            },
            {
                title: 'Tree Recursion',
                path: '/week2/treerecursion'
            }
        ]
    },
    {
        title: 'Week 3',
        path: '/week3',
        subnav: [
            {           
                title: 'Sequences',
                path: '/week3/sequences'
            },
            {
                title: 'ADTs and Trees',
                path: '/week3/treeadt'
            }
        ]
    },
    {
        title: 'Week 4',
        path: '/week4',
        subnav: [
            {           
                title: 'Iterators, Generators',
                path: '/week4/itergen'
            }
        ]
    },
    {
        title: 'Week 5',
        path: '/week5',
    },
    {
        title: 'Week 6',
        path: '/week6',
    },
    {
        title: 'Week 7',
        path: '/week7',
    },
    {
        title: 'Week 8',
        path: '/week8',
    }
];
