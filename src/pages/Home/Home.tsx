import React from 'react';

import OperatorPanel from '@/components/templates/OperatorPanel/OperatorPanel';

import BalanceCard from '@/components/organisms/BalanceCard/BalanceCard';
import ActivityCard from '@/components/organisms/ActivityCard/ActivityCard';

import Section from '@/components/atoms/Section/Section';

import './Home.scss';


const Home: React.FC = () => {
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