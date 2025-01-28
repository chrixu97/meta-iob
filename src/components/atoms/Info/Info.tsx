import React from 'react';
import './Info.scss';

interface InfoProps {
  variant: 'success' | 'error';
  message: string;
  className?: string;
}

const Info: React.FC<InfoProps> = ({ variant, message, className }) => {
  return (
    <div className={`info info--${variant} small-text ${className}`}>
      <span>
        {message}
      </span>
    </div>
  );
};

export default Info;