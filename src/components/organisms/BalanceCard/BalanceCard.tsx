import React from 'react';
import Card from '@/components/atoms/Card/Card';
import Button from '@/components/atoms/Button/Button';

import './BalanceCard.scss';

const BalanceCard: React.FC = () => {
  return (
    <Card className='balance-card'>
      <p className='balance-card__title title'>Balance</p>
      <p className='balance-card__amount big-text'>10.45€</p>

      <Button variant="primary">Añadir Fondos</Button>
    </Card>
  );
};

export default BalanceCard;