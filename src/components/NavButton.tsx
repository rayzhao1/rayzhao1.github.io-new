import { useNavigate } from 'react-router-dom'

export type ButtonProps = {
  children?: React.ReactNode;
  pathname: string;
  color: string;
};

export const NavButton: React.FC<ButtonProps> = ({
  children,
  pathname, 
  color
  }) => {
    const navigate = useNavigate();
  return (
    <button className = {color}
      onClick= {() => {
        navigate(pathname)
      }}
      >
      {children}
      </button>
  );
};

export default NavButton;