import { useTranslation } from 'react-i18next';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';

import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Info from '@/components/atoms/Info/Info';
import useFormValidation from '@/hooks/useFormValidation';

import { RootState } from '@/state/store';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const users = useSelector((state: RootState) => state.data.users);

  const formValidation = useFormValidation() as UseFormValidationReturn;
  const credentialsErrorRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<'login' | 'register' | ''>('');
  const [isDirty, setIsDirty] = useState(false);

  interface UseFormValidationReturn {
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
    repeatPassword: string;
    repeatPasswordError: boolean;
    credentialsError: boolean;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRepeatPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCredentialsError: (value: boolean) => void;
    cleanFields: () => void;
    setErrors: (email: boolean, password: boolean, repeatPassword: boolean) => void;
  }

  const toggleMode = () => {
    formValidation.cleanFields();
    setMode((prevMode) => (prevMode === 'register' ? 'login' : 'register'));
  };

  const showInLogin = () => {
    if (mode === 'login') return 'show';
    if (mode === 'register') return 'hide';
    return 'no-animation';
  }

  const showInRegister = () => {
    if (mode === 'register') return 'show';
    if (mode === 'login') return 'hide';
    return 'no-animation';
  }

  const showLoginError = (error: boolean) => {
    if (mode === '' && error) return 'show';
    if (mode === 'login' && error) return 'show';
    return 'hide';
  }

  const showRegisterError = (error: boolean) => {
    if (error && mode === 'register') return 'show';
    return 'hide';
  }

  const checkCredentials = () => {    
    users.forEach((user) => {
      if (user.email === formValidation.email && user.password === formValidation.password) {
        void navigate('/');
      } else {
        formValidation.handleCredentialsError(true);
      }
    });
  };

  const handleLoginButton = () => {
    setIsDirty(true);

    switch(mode) {
      case 'login':
        checkCredentials();
        break;
      case 'register':
        formValidation.setErrors(
          !formValidation.email,
          !formValidation.password, 
          !formValidation.repeatPassword
        );

        if (formValidation.email && formValidation.password && formValidation.repeatPassword) {
          void navigate('/');
        }

        break;
      default:
        checkCredentials();
        break;
    }
  };
  
  return (
    <div className='login-form'>
      <form>
        <p className={`login-form__register-text ${showInRegister()}`}>
          {t('loginPage.registerText')}
        </p>

        <div className='login-form__input_wrapper'>
          <Input
            type="email"
            variant="email"
            placeholder={t('loginPage.form.email.placeholder')}
            value={formValidation.email}
            onChange={formValidation.handleEmailChange}
            error={mode === 'register' && formValidation.emailError}
          />

          <Input
            type="password"
            variant="password"
            placeholder={t('loginPage.form.password.placeholder')}
            value={formValidation.password}
            onChange={formValidation.handlePasswordChange}
            error={mode === 'register' && formValidation.passwordError}
          />

          <Input
            id="repeat-password"
            type="password"
            variant="password"
            className={showInRegister()}
            placeholder={t('loginPage.form.repeatPassword.placeholder')}
            value={formValidation.repeatPassword}
            onChange={formValidation.handleRepeatPasswordChange}
            error={mode === 'register' && formValidation.repeatPasswordError}
          />
        </div>

        <Info 
          variant="error"
          message={t('loginPage.form.buttons.error')}
          className={`${isDirty ? '' : 'no-animation'} ${showLoginError(formValidation.credentialsError)}`}
          ref={credentialsErrorRef}
        />

        <div className={`login-form__error_wrapper ${showInRegister()}`}>
          <Info 
            variant="error"
            className={showRegisterError(formValidation.emailError)}
            message={t('loginPage.form.email.error')}
          />
          
          <Info 
            variant="error"
            className={showRegisterError(formValidation.passwordError)}
            message={t('loginPage.form.password.error')}
          />

          <Info
            variant="error"
            className={showRegisterError(formValidation.repeatPasswordError)}
            message={t('loginPage.form.repeatPassword.error')}
          />
        </div>
      </form>
      
      <Button 
        variant="primary" 
        disabled={(mode === 'register' && (formValidation.emailError || formValidation.passwordError || formValidation.repeatPasswordError))}
        onClick={handleLoginButton}
      >
        <span className={showInLogin()}>
          {t('loginPage.form.buttons.login')}
        </span>

        <span className={showInRegister()}>
          {t('loginPage.form.buttons.register')}
        </span>
      </Button>

      <Button variant="tertiary" onClick={toggleMode}>
        <span className={showInLogin()}>
        {t('loginPage.form.buttons.register')}
        </span>

        <span className={showInRegister()}>
          {t('loginPage.form.buttons.login')}
        </span>
      </Button>
    </div>
  );
};

export default LoginForm;