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

const LoginComponent = ({ history }) => {
  const [name, setName] = useState('');

  useEffect(() => {}, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    history.push('/dashboard');
  };

  return (
    <Paper className="login-paper" elevation={12}>
      <Container>
        <Grid className="center" direction="column" container>
          <Grid item>
            <h1>Welcome</h1>
            <br />
          </Grid>
          <Grid xs={12} item>
            <form onSubmit={onSubmitHandler}>
              <TextField
                required={true}
                type="name"
                name="name"
                id="standard"
                label="Name"
                placeholder="Enter Your name"
                fullWidth={true}
                value={name}
                onChange={onChangeHandler}
              />
              <br />

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
