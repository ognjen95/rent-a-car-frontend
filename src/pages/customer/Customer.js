import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Paper } from '@material-ui/core';

import './customer.style.css';
import UserRentedCar from '../../components/user-rented-car/UserRentedCar';

import { useSelector, useDispatch } from 'react-redux';
import { getCustomer, editCustomer, deleteCustomer } from './CustomerAction';

const Customer = ({ match, history }) => {
  const { customer, customerRentals, isLoading, error } = useSelector(
    (state) => state.customer
  );

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const formData = { name, email, phone, lastName };
  const dispatch = useDispatch();

  const rentedCars = customerRentals;

  useEffect(() => {
    dispatch(getCustomer(match.params.id));
    if (!customer) {
      return null;
    } else {
      setName(customer.name);
      setEmail(customer.email);
      setPhone(customer.phone);
      setLastName(customer.lastName);
    }
  }, [
    dispatch,
    customer.name,
    customer.email,
    customer.phone,
    customer.lastName,
  ]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'lastName') {
      setLastName(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (window.confirm('Do You want to save?')) {
      dispatch(editCustomer(formData, match.params.id));
    }
  };

  const deleteHandler = () => {
    if (window.confirm('Do you realy want to delete customer?')) {
      dispatch(deleteCustomer(match.params.id));
      history.push('/customers');
    }
  };
  return (
    <Container>
      <Grid container justify="center" alignItems="flex-start" direction="row">
        <Grid xs={12} md={6} item>
          <div className="customer-info">
            <h2>Client profile info</h2>
            <Paper className="customer-paper">
              <Button
                className="customer-dlt-btn"
                variant="outlined"
                color="secondary"
                type="button"
                onClick={deleteHandler}
              >
                Delete customer
              </Button>
              <form onSubmit={onSubmitHandler}>
                <TextField
                  required={true}
                  type="text"
                  name="name"
                  id="full name"
                  label="Name"
                  placeholder="Enter Your name "
                  fullWidth={true}
                  value={name}
                  onChange={onChangeHandler}
                />{' '}
                <TextField
                  required={true}
                  type="text"
                  name="lastName"
                  id="lastName"
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
                  id="standard-basic-phonee"
                  label="Phone number"
                  placeholder="Enter Your phone number"
                  fullWidth={true}
                  value={phone}
                  onChange={onChangeHandler}
                />
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Save
                </Button>
              </form>
            </Paper>
          </div>
        </Grid>
        <Grid xs={12} md={6} item>
          <div className="customer-info">
            <h2>Rented cars:</h2>
            {rentedCars.map((i, idx) => (
              <UserRentedCar
                key={idx}
                imgUrl={i.imgUrl}
                brand={i.brand}
                model={i.model}
                fuel={i.fuel}
                price={i.price}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Customer;
