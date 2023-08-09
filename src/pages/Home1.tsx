import React from 'react';
import { FC } from 'react';
import Link from 'react-router-dom';
import logo from '../images/favicon.png'
import NavButton from '../components/NavButton'
import PopButton from '../components/PopButton'

export const Home: FC = () => {
    return (
        <div>
            <br/>
            <NavButton pathname='/su23' children = "Notes" color = 'redish'/> 
            <br/>
        </div>
    )
};
