import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  as?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  disabled = false,
  onClick 
}) => {
  const className = `button button--${variant}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled} aria-disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;