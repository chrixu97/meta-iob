import React from 'react';
import './ActivityIcon.scss';

interface ActivityIconProps {
  type: string;
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ type }) => {
  return (
    <div className={`activity-icon activity-icon--${type}`} />
  );
};

export default ActivityIcon;