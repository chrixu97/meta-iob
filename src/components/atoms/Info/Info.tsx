import React from 'react';
import './Info.scss';

interface InfoProps {
  variant: 'success' | 'error';
  message: string;
}

const Info: React.FC<InfoProps> = ({ variant, message }) => {
  return (
    <div className={`info info--${variant}`}>
      {message}
    </div>
  );
};

export default Info;