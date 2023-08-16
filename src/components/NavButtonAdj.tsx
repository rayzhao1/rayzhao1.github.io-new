import React from 'react'
import { useNavigate } from 'react-router-dom'

export type ButtonProps = {
  name?: React.ReactNode;
  style: string;
  path: string;
  color: string;
};

export const NavButtonAdj: React.FC<ButtonProps> = ({
  name,
  path, 
  style,
  color
  }) => {
    const navigate = useNavigate();
    const s = color + " " + style;
  return (
    <button className = {s}
      onClick= {() => {
        navigate(path)
      }}
      >
      {name}
      </button>
  );
};

export default NavButtonAdj;