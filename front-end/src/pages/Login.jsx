import React from 'react';
import { login } from '../API/login.API';
import isUserInputValid from '../helpers/login.helpers';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showAlert, setAlert] = React.useState(false);
  const [loginDisabled, setLoginDisabled] = React.useState(true);

  const loginRequest = async () => {
    const response = await login({ email, password });
    if (!response) {
      setAlert(true);
      const IN_THREE_SECONDS = 3000;
      setTimeout(() => { setAlert(false); }, IN_THREE_SECONDS);
    }
  };

  React.useEffect(() => {
    if (isUserInputValid(email, password)) setLoginDisabled(false);
    else setLoginDisabled(true);
  }, [email, password]);

  return (
    <div className="login-page">
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          data-testid="common_login__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          id="senha"
          type="password"
          data-testid="common_login__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ loginDisabled }
        onClick={ loginRequest }
      >
        Login
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho uma conta
      </button>
      {showAlert ? (
        <span data-testid="common_login__element-invalid-email">Usuario invalido</span>
      ) : null}
    </div>
  );
}