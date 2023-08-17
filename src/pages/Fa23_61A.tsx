import React from 'react';
import { FC } from 'react';
import {Link, Routes, Router} from 'react-router-dom';
import logo from '../images/favicon.png'
import test from 'public/favicon.png'
import PopButton from '../components/PopButton'
import NavButtonAdj from '../components/NavButtonAdj';
import LinkButtonAdj from '../components/LinkButtonAdj';
import drive from '../images/drive.png'
import parrot from '/drive.png'

export const Fa23_61A: FC = () => {
    return (
        <main>
            <header>
                <h1>CS 61A</h1> 
                <h4>Fall 2023</h4>
                <div className='off_wrapper'>
                    <div id="off_left">
                        <img src={logo} alt = "hi"></img>
                    </div>
                    <div id="off_right">
                        <table className = 'table_info'>
                            <tbody className='td_info'>
                                <tr className = 'tr_info'>
                                    <th className='center_text'><strong>Discussion</strong></th>
                                    <th className='center_text'><strong>Lab</strong></th>
                                </tr>
                                <tr className = 'tr_info'>
                                    <td className = 'td_info'><LinkButtonAdj name = 'Temp. Check' link = "https://forms.gle/NNAa2TrNXsTHwxEq7" color = 'orish' style= 'button_med'/></td>
                                    <td className = 'td_info'><LinkButtonAdj name = 'Lab Q`s' link = "https://forms.gle/NNAa2TrNXsTHwxEq7" color = 'orish' style= 'button_med'/></td>
                                </tr>
                                <tr className = 'tr_info'>
                                    <td className = 'td_info'><LinkButtonAdj name = 'Disc. Attend.' link = "https://forms.gle/NNAa2TrNXsTHwxEq7" color = 'orish' style= 'button_med'/></td>
                                    <td className = 'td_info'><LinkButtonAdj name = 'Lab Attend.' link = "https://forms.gle/NNAa2TrNXsTHwxEq7" color = 'orish' style= 'button_med'/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>    
                <div className = 'button_drive'>
                    <Link to = "https://drive.google.com/drive/folders/1--DcM6P0iFkoW_1RX_S6Y-o2NahxlANb?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className='button_drive center'><img src= { drive } alt="my image"/></button>
                    </Link>
                </div>
            </header>
            <body>
                <p>Lab Interns!</p>
            </body>
        </main>
    )
};
