import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from '@material-ui/core';

import './login-component.style.css';

const LoginComponent = ({ formChange, history }) => {
  const [email, SetEmail] = useState('atlagicognjen@gmail.com');
  const [password, SetPassword] = useState('12345678');

  useEffect(() => {}, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      SetEmail(value);
    } else if (name === 'password') {
      SetPassword(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        return alert('Fill up form');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper className="login-paper" elevation={12}>
      <Container>
        <Grid className="center" direction="column" container>
          <Grid item>
            <h1>Login</h1>
            <br />
          </Grid>
          <Grid xs={12} item>
            <form onSubmit={onSubmitHandler}>
              <TextField
                required={true}
                type="email"
                name="email"
                id="standard-basic-email"
                label="Email"
                placeholder="Enter Your email"
                fullWidth={true}
                value={email}
                onChange={onChangeHandler}
              />
              <br />
              <TextField
                required={true}
                type="password"
                name="password"
                id="standard-basic-password"
                label="Password"
                placeholder="Enter Your password"
                fullWidth={true}
                value={password}
                onChange={onChangeHandler}
              />{' '}
              <Button
                className="btn"
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default LoginComponent;
