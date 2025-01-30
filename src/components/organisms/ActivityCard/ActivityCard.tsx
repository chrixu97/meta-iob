import React from 'react';

import Card from '@/components/atoms/Card/Card';
import Button from '@/components/atoms/Button/Button';
import ActivityItem from '@/components/molecules/ActivityItem/ActivityItem';

import './ActivityCard.scss';

interface ActivityItemProps {
  id: string;
  title: string;
  type: string;
  date: string;
  amount: string;
}

interface ActivityCardProps {
  activities: ActivityItemProps[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({activities}) => {
  return (
    <Card className='activity-card'>
      <p className='activity-card__title title'>Últimos Movimientos</p>

      <div className="activity-card__list">
        {activities.map(activity => (
          <ActivityItem key={activity.id} activity={activity}></ActivityItem>
        ))}
      </div>
      
      <Button variant="tertiary">Ver más</Button>
    </Card>
  );
};

export default ActivityCard;