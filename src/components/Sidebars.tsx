import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useMatch, useResolvedPath} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

// Top Bar
const TopNav = styled.div`
    display: flex;
    justify-content: flex-start
    align-items: center;
    height: 4rem;
    background-color: black;
    color: white;
    align-self: center;
    align-items: center;
    align-content: center;
`;

// Side bar & close icon.
const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    overflow-y: scroll;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
`;

// Menu Icon
const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.8rem;
    font-size: 1.5rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div`
`;

const Sidebars: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value ={{ color: '#fff' }}>
            <TopNav>
                <NavIcon to='#' onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
                <div id = 'in_line'>
                    <ul>
                        <li><a href = '/su23'>CS 61A Su'23</a></li>
                        <li><a href = '/'>CS 61A Fa'22</a></li>
                        <li><a href = '/home'>Home</a></li>
                    </ul>
                </div>
            </TopNav>
            <SidebarNav sidebar = {sidebar}>
                <SidebarWrap>
                    <NavIcon to='#' onClick={showSidebar}>
                        <AiOutlineMenu />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
    }

export default Sidebars;