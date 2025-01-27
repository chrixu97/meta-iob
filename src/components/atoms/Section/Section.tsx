import React from 'react';
import './Section.scss';

interface ContainerProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({ children, as: Tag = 'section' }) => {
  return (
    <Tag className="section">
      <div className="section-container">
        {children}
      </div>
    </Tag>
  );
};

export default Container;