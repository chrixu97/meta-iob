import React from 'react';

import OperatorPanel from '@/components/templates/OperatorPanel/OperatorPanel';

import BalanceCard from '@/components/organisms/BalanceCard/BalanceCard';
import ActivityCard from '@/components/organisms/ActivityCard/ActivityCard';
import OperatorCard from '@/components/organisms/OperatorCard/OperatorCard';
import UserItem from '@/components/molecules/UserItem/UserItem';

import Section from '@/components/atoms/Section/Section';
import Button from '@/components/atoms/Button/Button';
import './Home.scss';


const Home: React.FC = () => {
  const users = [
    {
      id: 1,
      name: 'Christopher Bellido',
    },
    {
      id: 2,
      name: 'Eva Cantero',
    },
  ];

  return (
    <main className='home-page'>
      <Section>
        <div className="home-page__left">
          <BalanceCard />
          <OperatorPanel></OperatorPanel>
          <ActivityCard />
        </div>

        <div className="home-page__right">
          <OperatorPanel></OperatorPanel>
        </div>
      </Section>
    </main>
  );
};

export default Home;