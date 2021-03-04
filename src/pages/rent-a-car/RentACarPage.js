import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  Paper,
  Container,
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './rent-a-car.style.css';

const RentACar = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {}, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'brand':
        setBrand(value);
        break;
      case 'model':
        setModel(value);
        break;
      case 'tel':
        setTel(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'fullName':
        setFullName(value);
        break;
    }
  };

  const carInfo = {
    id: '1324423',
    brand: 'Toyota',
    model: 'Rav4',
    fuel: 'diesel',
    type: 'SUV',
    year: 2020,
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
    pricePerDay: 15,
    totalPrice: 45,
    available: true,
    discount: 0,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <div elevation={12} className="rent-card car-card  ">
        <Grid container justify="space-between">
          <Grid item xs={12} md={6}>
            <img src={process.env.PUBLIC_URL + '/imgs/carBg.jpg'} alt="" />
            {/* <div>{img}</div> */}
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            item
            direction="row"
            xs={12}
            md={6}
          >
            <Grid xs={12} sm={6} item>
              <h1>
                {carInfo.brand} - {carInfo.model}
              </h1>
              <h3>Fuel: {carInfo.fuel}</h3>
              <h3>Type: {carInfo.type}</h3>
              <h3>Construction Year: {carInfo.year}</h3>
              <h3>Price per day: {carInfo.pricePerDay} $</h3>
              <h3>Discount: {carInfo.discount} $</h3>
              <h3>Discount: {carInfo.totalPrice} $</h3>
            </Grid>

            <Grid xs={12} sm={6} item>
              <Container>
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
                    fullWidth={true}
                    className="btn"
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Add cilent
                  </Button>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default RentACar;
