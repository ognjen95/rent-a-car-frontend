import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import './new-customer.style.css';
import Alert from '@material-ui/lab/Alert';
import { createCustomer } from './NewCustomerAction';
import { useDispatch, useSelector } from 'react-redux';
import { newCustomerReset } from './NewCustomerSlice';

const NewCustomerPage = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { isLoading, customer, success, error } = useSelector(
    (state) => state.newCustomer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newCustomerReset());
  }, [dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = { name, lastName, email, phone };
    dispatch(createCustomer(formData));
  };

  return (
    <Container className="new-costumer-wraper">
      <Paper className="new-costumer-paper" elevation={12}>
        <Grid direction="column" jutify="center" alignItems="center" container>
          <Grid xs={12} item>
            <h1>Add new customer</h1>
            <br />
          </Grid>
          <Grid xs={12} item>
            <form onSubmit={onSubmitHandler}>
              <TextField
                required={true}
                type="text"
                name="name"
                id="full name"
                label="Name"
                placeholder="Enter Your name"
                fullWidth={true}
                value={name}
                onChange={onChangeHandler}
              />{' '}
              <TextField
                required={true}
                type="text"
                name="lastName"
                id="lastrName"
                label="Last name"
                placeholder="Enter Your lastname"
                fullWidth={true}
                value={lastName}
                onChange={onChangeHandler}
              />{' '}
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
              <TextField
                required={true}
                type="phone"
                name="phone"
                id="standard-basic-email"
                label="Phone number"
                placeholder="Enter Your phone number"
                fullWidth={true}
                value={phone}
                onChange={onChangeHandler}
              />
              {error && <Alert severity="error"> {error}</Alert>}
              {success && (
                <Alert severity="success"> New customer created</Alert>
              )}
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  fullWidth={true}
                  className="btn"
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Add cilent
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NewCustomerPage;
