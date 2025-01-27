import React from 'react';
import Section from '@/components/atoms/Section/Section';
import Button from '@/components/atoms/Button/Button';
import Card from '../components/atoms/Card/Card';

const Login: React.FC = () => {
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
      </Section>
    </main>
  );
};

export default Login;