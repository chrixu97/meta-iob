import React from 'react';
import './ActivityIcon.scss';

interface ActivityIconProps {
  type: 'restaurant' | 'hotel' | 'activity' | 'shopping' | 'transport';
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ type }) => {
  return (
    <div className={`activity-icon activity-icon--${type}`} />
  );
};

export default ActivityIcon;