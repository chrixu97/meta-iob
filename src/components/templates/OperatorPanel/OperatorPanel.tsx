import React from 'react';

import OperatorCard from '@/components/organisms/OperatorCard/OperatorCard';
import UserItem from '@/components/molecules/UserItem/UserItem';

import Button from '@/components/atoms/Button/Button';
import './OperatorPanel.scss';


const OperatorPanel: React.FC = () => {
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
    <div className="operator-panel">
      <div className="operator-buttons">
        <Button variant="primary" fullWidth={true}>Enviar</Button>
        <Button variant="primary" fullWidth={true}>Solicitar</Button>
      </div>

      <OperatorCard></OperatorCard>

      <div className="my-contacts">
        <p className='my-contacts__title title'>Mis contactos</p>

        <div className="my-contacts__list">
          {users.map(user => (
            <UserItem key={user.id} user={user} filled={false}></UserItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatorPanel;