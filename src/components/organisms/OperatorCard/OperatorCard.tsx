import React from 'react';

import UserItem from '@/components/molecules/UserItem/UserItem';

import Card from '@/components/atoms/Card/Card';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

import './OperatorCard.scss';

const OperatorCard: React.FC = () => {
  const user = {
    id: 1,
    name: "Christopher Bellido",
  }

  return (
    <Card className='operator-card'>
      <p className='operator-card__title title'>Operar</p>

      <UserItem user={user}></UserItem>

      <Input
        type="number"
        placeholder="Cantidad"
        error={false}
      />

      <div className="operator-card__buttons">
        <Button variant="primary">Enviar</Button>
        <Button variant="secondary">Solicitar</Button>
      </div>
    </Card>
  );
};

export default OperatorCard;