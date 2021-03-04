import { Paper, Container } from '@material-ui/core';
import React from 'react';
import LoginComponent from '../../components/login-component/LoginComponent';
import '../../components/login-component/login-component.style.css';
const LoginPage = ({ history }) => {
  return (
    <div className="login-page-container">
      <LoginComponent history={history} />
    </div>
  );
};

export default LoginPage;
