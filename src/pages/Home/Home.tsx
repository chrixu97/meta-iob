import React from 'react';

import BalanceCard from '@/components/organisms/BalanceCard/BalanceCard';
import ActivityCard from '@/components/organisms/ActivityCard/ActivityCard';
import OperatorCard from '@/components/organisms/OperatorCard/OperatorCard';

import Section from '@/components/atoms/Section/Section';
import Button from '@/components/atoms/Button/Button';
import './Home.scss';


const Home: React.FC = () => {
  return (
    <main className='home-page'>
      <Section>
        <div className="home-page__left">
          <BalanceCard />
          <ActivityCard />
        </div>

        <div className="home-page__right">
          <div className="operator-buttons">
            <Button variant="primary" fullWidth={true}>Enviar</Button>
            <Button variant="primary" fullWidth={true}>Solicitar</Button>
          </div>

          <OperatorCard></OperatorCard>

        </div>
      </Section>
    </main>
  );
};

export default Home;