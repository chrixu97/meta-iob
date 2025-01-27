import React from 'react';
import './Section.scss';

interface SectionProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Section: React.FC<SectionProps> = ({ children, as: Tag = 'section' }) => {
  return (
    <Tag className="section">
      <div className="section-container">
        {children}
      </div>
    </Tag>
  );
};

export default Section;