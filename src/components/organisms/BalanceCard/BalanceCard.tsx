import React from 'react';
import { useDispatch } from 'react-redux';

import Card from '@/components/atoms/Card/Card';
import Button from '@/components/atoms/Button/Button';

import { setOperatorState } from '@/state/operator/operatorSlice';

import './BalanceCard.scss';

interface BalanceCardProps {
  balance: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({balance}) => {
  const dispatch = useDispatch();

  const formattedBalance = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(balance);

  return (
    <Card className='balance-card'>
      <p className='balance-card__title title'>Balance</p>
      <p className='balance-card__amount big-text'>{formattedBalance}</p>

      <Button variant="primary" onClick={() => dispatch(setOperatorState('add'))}>
        Añadir Fondos
      </Button>
    </Card>
  );
};

export default BalanceCard;