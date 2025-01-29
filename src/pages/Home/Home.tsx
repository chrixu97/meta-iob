import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';

import OperatorPanel from '@/components/templates/OperatorPanel/OperatorPanel';
import BalanceCard from '@/components/organisms/BalanceCard/BalanceCard';
import ActivityCard from '@/components/organisms/ActivityCard/ActivityCard';
import Section from '@/components/atoms/Section/Section';

import './Home.scss';

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.loggedUser.user);

  return (
    <main className='home-page'>

      <h1>{user.name}</h1>
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