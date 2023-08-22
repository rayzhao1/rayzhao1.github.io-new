import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";

export const SidebarData_Fa23: SidebarItem[] = [
    {
        title: 'Home',
        path: '/su23',
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
                path: '/demo/pathyielder'
            }
        ]
    },
    {
        title: 'Intro',
        path: '/fa23/intro'
    },
    {
        title: 'Week 1',
        path: '/week1',
        subnav: [
            {
                title: 'Introduction',
                path: '/su23/week1/intro'
            },
            {
                title: 'Variables and Functions',
                path: '/su23/week1/basics'
            },
            {
                title: 'Control & Environment Diagrams',
                path: '/su23/week1/control'
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
                title: 'Recursion, Tree Recursion',
                path: '/week2/rec'
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
            },
            {
                title: 'Efficiency',
                path: '/week4/efficiency'
            }
        ]
    },
    {
        title: 'Week 5',
        path: '/week5',
        subnav: [
            {           
                title: 'OOP, Inheritance, Repr/Str',
                path: '/week5/oop'
            },
            {           
                title: 'Trees and Linked Lists',
                path: '/week5/trees-linked-lists'
            }
        ]
    },
    {
        title: 'Week 6',
        path: '/week6',
        subnav: [
            {           
                title: 'Scheme',
                path: '/week6/scheme'
            },
            {           
                title: 'Tail Recursion',
                path: '/week6/tail'
            },
            {
                title: 'Interpreters',
                path: '/week6/interpreters'
            }
        ]
    },
    {
        title: 'Week 7',
        path: '/week7',
        subnav: [
            {           
                title: 'SQL',
                path: '/week7/SQL'
            },
            {
                title: 'Regular Expressions',
                path: '/week7/regex'
            }
        ]
        
    }
];
