import React from 'react';
import './ActivityItem.scss';

import ActivityIcon from '@/components/atoms/ActivityIcon/ActivityIcon';

interface ActivityItemProps {
  activity: {
    title: 'restaurant' | 'shopping',
    type: string,
    date: string,
    amount: string,
  }
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {

  return (
    <div className="activity-item">
      <ActivityIcon type={activity.type}/>

      <div className="activity-desc">
        <p className="activity-title">{activity.title}</p>
        <p className="activity-date small-text">{activity.date}</p>
      </div>
      
      <p className="activity-amount">{activity.amount}</p>
    </div>
  );
};

export default ActivityItem;