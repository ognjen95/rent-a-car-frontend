import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Paper } from '@material-ui/core';

import './customer.style.css';
import UserRentedCar from '../../components/user-rented-car/UserRentedCar';

const Costumer = ({ match }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const rentedCars = [
    {
      img: 'imgUrl',
      brend: 'Toyota',
      model: 'Yaris',
      rentDate: ' 15.feb-23.feb',
      returned: false,
    },

    {
      img: 'imgUrl',
      brend: 'Toyota',
      model: 'Yaris',
      rentDate: ' 15.feb-23.feb',
      returned: false,
    },
    {
      img: 'imgUrl',
      brend: 'Toyota',
      model: 'Yaris',
      rentDate: ' 15.feb-23.feb',
      returned: false,
    },
  ];
  const { img, brend, model, rentDate } = rentedCars;
  useEffect(() => {}, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'tel') {
      setTel(value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container justify="center" alignItems="flex-start" direction="row">
        <Grid xs={12} md={6} item>
          <div className="customer-info">
            <h2>Client profile info</h2>
            <Paper className="customer-paper">
              <form onSubmit={onSubmitHandler}>
                <TextField
                  required={true}
                  type="text"
                  name="fullName"
                  id="full name"
                  label="Name"
                  placeholder="Enter Your name and lastname"
                  fullWidth={true}
                  value={fullName}
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
                  type="tel"
                  name="tel"
                  id="standard-basic-email"
                  label="Phone number"
                  placeholder="Enter Your phone number"
                  fullWidth={true}
                  value={tel}
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
                img={i.img}
                brend={i.brend}
                model={i.model}
                rentDate={i.rentDate}
                carInfo={rentedCars}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Costumer;
