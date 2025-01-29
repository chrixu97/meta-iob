import React from 'react';
import Card from '@/components/atoms/Card/Card';
import Button from '@/components/atoms/Button/Button';
import ActivityItem from '@/components/molecules/ActivityItem/ActivityItem';

import './ActivityCard.scss';

const ActivityCard: React.FC = () => {
  interface ActivityItemProps {
    id: string;
    title: string;
    type: 'restaurant' | 'shopping',
    date: string;
    amount: string;
  }

  const activities: ActivityItemProps[] = [
    {
      id: '1',
      title: 'Restaurante Pepe',
      type: 'restaurant',
      date: '10 de Febrero ',
      amount: '-100,50€',
    },
    {
      id: '2',
      title: 'Restaurante Antonio',
      type: 'restaurant',
      date: '10 de Febrero ',
      amount: '-100,50€',
    }
  ];

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