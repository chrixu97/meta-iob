import React from 'react';
import './Section.scss';

interface SectionProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, as: Tag = 'section', className }) => {
  return (
    <Tag className={`section ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </Tag>
  );
};

export default Section;