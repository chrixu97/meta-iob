import React from 'react';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Info from '@/components/atoms/Info/Info';

import './LoginForm.scss';

const LoginForm: React.FC = () => {
  return (
    <form className='login-form'>

      <p className='login-form__register-text'>Crea tu cuenta de manera gratuita</p>

      <Input
        type="text"
        variant="email"
        placeholder="Correo electrónico"
        error={false}
      />

      <Input
        type="password"
        variant="password"
        placeholder="Contraseña"
        error={false}
      />

      <Input
        type="password"
        variant="password"
        placeholder="Repetir contraseña"
        error={false}
      />

      <Info variant="error" message="Usuario o contraseña incorrecta" />
      <Info variant="error" message="Formato de correo electrónico incorrecto" />
      <Info variant="error" message="La contraseña debe tener al menos 8 caracteres e incluir: una letra mayúscula, un número y un símbolo especial (como @, #, $, %, etc.)." />
      <Info variant="error" message="La repetición de la contraseña no coincide" />

      <Button variant="primary">Iniciar sesión</Button>
      <Button variant="tertiary">Crear una cuenta</Button>
    </form>
  );
};

export default LoginForm;