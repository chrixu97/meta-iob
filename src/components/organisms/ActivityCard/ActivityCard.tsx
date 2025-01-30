import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@/components/atoms/Card/Card';
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
  const { t } = useTranslation();

  return (
    <Card className='activity-card'>
      <p className='activity-card__title title'>{t('homePage.activitiesCard.title')}</p>

      <div className="activity-card__list">
        {activities.length > 0 ? (
          activities.map(activity => (
            <ActivityItem key={activity.id} activity={activity}></ActivityItem>
          ))
        ) : (
          <p>{t('homePage.activitiesCard.noActivities')}</p>
        )}
      </div>
    </Card>
  );
};

export default ActivityCard;