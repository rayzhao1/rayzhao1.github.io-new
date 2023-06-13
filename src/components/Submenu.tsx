import React, { FC, useState } from 'react'
import { SidebarItem } from '../models/SidebarItem';
import styled from 'styled-components';
import { Link, useMatch, useResolvedPath} from 'react-router-dom';

type SidebarLinkProps = {
    item: SidebarItem;
}

// Sidebar menu
const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;

    &:hover{
        background-color: gray;
        border-radius: 5px;
        border-left: 4px solid #6d44dc
    }
`;

const SidebarLabel = styled.span`
    margin-left: rem
`;

const Active = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;
    background-color: gray;
    border-radius: 5px;
    border-left: 4px solid #6d44dc
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    font-size: 0.875rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #6d44dc;
    }

`;

const Submenu: FC<SidebarLinkProps> = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const resolvedPath = useResolvedPath(item.path);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
            </SidebarLink>
            {subnav && 
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
            })}
        </>
    );
};

export default Submenu;