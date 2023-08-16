import React from 'react';
import { FC } from 'react';
import Link from 'react-router-dom';
import logo from '../images/favicon.png'
import PopButton from '../components/PopButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';

export const Fa23_61A: FC = () => {
    return (
        <main>
            <br/>
                <NavButtonAdj name = "Summer'23 Archive" path='/su23'  color = 'orish' style = 'button_large'/> 
            <br/>
            <header>
                <h1>CS 61A</h1> 
                <h4>Fall 2023</h4>
                <img className = 'off_center_l' src={logo} alt = "hi"></img>
                <table className = 'off_center_r'>
                    <tbody>
                        <tr>
                            <td>Info</td>
                            <td>Disc
                                <div>
                                    <LinkButtonAdj name = 'Discussion Attendance' link = "https://forms.gle/NNAa2TrNXsTHwxEq7"
                                    color = 'orish' style= 'button_med'/>
                                </div>
                            </td>
                            <td>Lab</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>hi</td>
                            <td>hi</td>
                        </tr>
                        <tr>
                            <td>Google Drive</td>
                            <td>hi</td>
                            <td>hi</td>
                        </tr>
                    </tbody>
                </table>
            </header>
            <body>
                <p>Lab Interns!</p>
            </body>
        </main>
    )
};
