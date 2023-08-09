import React from 'react';
import { FC } from 'react';
import NavButton from '../components/NavButton'

export const Home: FC = () => {
    return (
        <main>
            <header>
                <div>
                <br/>
                <NavButton pathname='/su23' children = "Notes" color = 'redish'/> 
                <br/>
            </div>
            </header>
        </main>
    )
};
