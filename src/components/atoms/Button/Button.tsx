import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  as?: 'button' | 'a';
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  onClick 
}) => {
  const className = `button button--${variant} ${fullWidth ? 'button--full-width' : ''}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled} aria-disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;