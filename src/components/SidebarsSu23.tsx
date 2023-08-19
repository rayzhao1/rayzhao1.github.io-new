import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link, useMatch, useResolvedPath} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiFillHome, AiOutlineClose, AiTwotoneFolder, AiTwotoneFolderOpen } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

// Top Bar

const TopNav = styled.div`
    display: flex;
    justify-content: flex-start
    align-items: center;
    height: 4rem;
    background-color: black;
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
const NavMenu = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.8rem;
    font-size: 1.5rem;
    margin-left: 2rem;
`;

const NavHome = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 3.8rem;
    font-size: 1.5rem;
    color: white;
    margin-right: 2rem;
`;

const SidebarWrap = styled.div`
`;

const SidebarsSu23: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value ={{ color: 'white' }}>
            <TopNav>
                    <NavMenu to='#' onClick={showSidebar}>
                        <AiOutlineMenu />
                    </NavMenu>
            </TopNav>
            <SidebarNav sidebar = {sidebar}>
                <SidebarWrap>
                    <NavMenu to='#' onClick={showSidebar}>
                        <AiOutlineMenu />
                    </NavMenu>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
    }

export default SidebarsSu23;