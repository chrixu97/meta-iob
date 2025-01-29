import React from 'react';
import './Input.scss';

interface InputProps {
  id?: string;
  type?: string;
  variant?: string,
  value: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  variant,
  value,
  className = '',
  onChange, 
  placeholder,
  error = false,
  disabled = false 
}) => {
  return (
    <div id={id} className={`input ${variant ? `input--${variant}` : ''} ${error ? 'input--error' : ''} ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;