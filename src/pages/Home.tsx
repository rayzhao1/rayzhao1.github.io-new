import React from 'react';
import { FC } from 'react';
import Link from 'react-router-dom';
import logo from '../images/favicon.png'
import PopButton from '../components/PopButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';

export const Home: FC = () => {
    return (
        <main>
            <body>
                <ul>
                    <li>About</li>
                        <ul>
                            Sophomore @ Berkeley interested in CS education & bioinformatics!
                        </ul>
                    <li>Teaching</li>
                    <li>
                        <ul>
                            <li>CS 61A</li>
                            <li>CS 61B</li>
                            <li>Origami</li>
                        </ul>
                    </li>
                    
                </ul>
            </body>
        </main>
    )
};
