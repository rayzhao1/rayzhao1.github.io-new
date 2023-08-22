import React from 'react'
import { Link } from 'react-router-dom';

export type ButtonProps = {
  name?: React.ReactNode;
  border?: string;
  style: string;
  link: string;
  color: string;
};

export const LinkButtonAdj: React.FunctionComponent<ButtonProps> = ({
  name,
  link, 
  style,
  color
  }) => {
    const s = color + " " + style;
  return (
      <Link to = { link } target="_blank" rel="noopener noreferrer">
          <button className = {s}>
            {name} 
          </button>
      </Link>
  );
};

export default LinkButtonAdj;