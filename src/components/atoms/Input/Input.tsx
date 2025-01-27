import React from 'react';
import './Input.scss';

interface InputProps {
  type?: string;
  variant?: string,
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: boolean
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text',
  variant,
  value, 
  onChange, 
  placeholder,
  error = false,
  disabled = false 
}) => {
  return (
    <div className={`input ${variant ? `input--${variant}` : ''} ${error ? 'input--error' : ''}`}>
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