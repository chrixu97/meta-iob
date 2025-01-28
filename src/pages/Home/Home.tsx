import React from 'react';

import BalanceCard from '@/components/organisms/BalanceCard/BalanceCard';

import Section from '@/components/atoms/Section/Section';
import './Home.scss';


const Home: React.FC = () => {
  return (
    <main className='home-page'>
      <Section>
        <div className="home-page__left">
          <BalanceCard />
        </div>

        <div className="home-page__right">
          
        </div>
      </Section>
    </main>
  );
};

export default Home;