import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setOperatorState } from '@/state/operator/operatorSlice';
import { logout } from '@/state/user/loggedUserSlice';

import Button from '@/components/atoms/Button/Button';
import Section from '@/components/atoms/Section/Section';
import logo from '@/assets/img/logo.svg';

import './Header.scss';


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setOperatorState(''));
    dispatch(logout());
    void navigate('/login')
  }

  return (
    <Section as="header" className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <Button variant="tertiary" onClick={() => handleLogout()}>Cerrar Sesión</Button>
    </Section>
  );
};

export default Header;
