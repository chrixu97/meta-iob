import React, { useState } from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Info from '@/components/atoms/Info/Info';
import useFormValidation from '@/hooks/useFormValidation';
import { useTranslation } from 'react-i18next';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<'login' | 'register' | ''>('');

  interface UseFormValidationReturn {
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
    repeatPassword: string;
    repeatPasswordError: boolean;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRepeatPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cleanFields: () => void;
  }

  const formValidation = useFormValidation() as UseFormValidationReturn;

  const toggleMode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    formValidation.cleanFields();
    setMode((prevMode) => (prevMode === 'register' ? 'login' : 'register'));
  };

  const showInRegister = () => {
    if (mode === 'register') return 'show';
    if (mode === 'login') return 'hide';
    return '';
  }

  const showInLogin = () => {
    if (mode === 'login') return 'show';
    if (mode === 'register') return 'hide';
    return '';
  }

  const showRegisterError = (error: boolean) => {
    if (error && mode === 'register') return 'show';
    return 'hide';
  }

  return (
    <form className='login-form'>
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

      <div className={`login-form__error_wrapper ${showInRegister()}`}>
        {/* {mode === 'login' && <Info variant="error" message={t('loginPage.form.buttons.error')} className={`${mode == 'login' ? 'show' : 'hide'}`}/>} */}
      
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
      
      <Button variant="primary">
        <span className={showInLogin()}>
          {t('loginPage.form.buttons.login')}
        </span>

        <span className={showInRegister()}>
          {t('loginPage.form.buttons.register')}
        </span>
      </Button>

      <Button variant="tertiary" onClick={() => toggleMode}>
        <span className={showInLogin()}>
        {t('loginPage.form.buttons.register')}
        </span>

        <span className={showInRegister()}>
          {t('loginPage.form.buttons.login')}
        </span>
      </Button>
    </form>
  );
};

export default LoginForm;