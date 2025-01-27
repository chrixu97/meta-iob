import React from 'react';
import './Header.scss';

import Button from '@/components/atoms/Button/Button';
import Section from '@/components/atoms/Section/Section';

import logo from '@/assets/img/logo.svg';

const Header: React.FC = () => {
  return (
    <Section as="header" className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <Button variant="tertiary">Cerrar Sesión</Button>
    </Section>
  );
};

export default Header;
