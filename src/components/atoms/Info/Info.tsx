import React from 'react';
import './Info.scss';

interface InfoProps {
  variant: 'success' | 'error';
  message: string;
}

const Info: React.FC<InfoProps> = ({ variant, message }) => {
  return (
    <div className={`info info--${variant} small-text`}>
      {message}
    </div>
  );
};

export default Info;