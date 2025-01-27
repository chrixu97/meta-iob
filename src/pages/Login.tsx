import React from 'react';
import Section from '@/components/atoms/Section/Section';
import Button from '@/components/atoms/Button/Button';

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
      </Section>
    </main>
  );
};

export default Login;