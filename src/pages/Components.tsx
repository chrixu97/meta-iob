import React, { useState } from 'react';
import Section from '@/components/atoms/Section/Section';
import Button from '@/components/atoms/Button/Button';
import Card from '@/components/atoms/Card/Card';
import Input from '@/components/atoms/Input/Input';
import Info from '@/components/atoms/Info/Info';
import ActivityIcon from '@/components/atoms/ActivityIcon/ActivityIcon';
import UserIcon from '@/components/atoms/UserIcon/UserIcon';
import ActivityItem from '@/components/molecules/ActivityItem/ActivityItem';
import UserItem from '@/components/molecules/UserItem/UserItem';

const Login: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const activity = {
    title: 'Restaurante Pepe',
    type: 'restaurant',
    date: '10 de Febrero ',
    amount: '-100,50€',
  }

  const user = {
    id: 1,
    name: "Christopher Bellido",
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sayThis = (text: string) => {
    alert(text);
  };

  return (
    <main>
      <Section>
        <h1>Login</h1>

        <Button 
          onClick={() => sayThis('Primero')}
        >
          Continuar
        </Button>

        <Button 
          onClick={() => sayThis('Segundo')}
          disabled={true}
        >
          Continuar
        </Button>

        <Button 
          variant="third" 
          onClick={() => sayThis('Tercero')}
        >
          Continuar
        </Button>

        <Card>
          Card
        </Card>

        <Input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Cantidad"
          error={true}
        />

        <Input
          type="text"
          variant="email"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          error={true}
        />
        {inputValue}

        <Input
          type="password"
          variant="password"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />

        <Info variant="error" message="Información importante: ERROR" />

        <Info variant="success" message="Información importante: EXITO" />

        <ActivityIcon type="restaurant"></ActivityIcon>
        <ActivityIcon type="shopping"></ActivityIcon>

        <UserIcon name="Christopher Bellido"></UserIcon>

        <ActivityItem activity={activity}></ActivityItem>

        <UserItem user={user}></UserItem>
        <UserItem user={user} filled={false}></UserItem>
        
      </Section>
    </main>
  );
};

export default Login;