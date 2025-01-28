import React from 'react';
import './Login.scss';

import Section from '@/components/atoms/Section/Section';
import Card from '@/components/atoms/Card/Card';

import LoginForm from '@/components/organisms/LoginForm/LoginForm';

import logo from '@/assets/img/logo.svg';

const Login: React.FC = () => {
  return (
    <main className='login-page'>
      <Section>
        <Card className='login-page__card'>
          <div className='login-page__logo'>
            <img src={logo} alt="" />
          </div>

          <LoginForm />
        </Card>
      </Section>
    </main>
  );
};

export default Login;