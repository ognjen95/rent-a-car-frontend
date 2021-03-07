import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Container } from '@material-ui/core';
import './rent-a-car.style.css';
import StartDatePicker from '../../components/date-picker/StartDatePicker';
import EndDatePicker from '../../components/date-picker/EndDatePicker';

import { rentCar } from './RentACarAction';
import { useDispatch, useSelector } from 'react-redux';

const RentACar = ({ match }) => {
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();

  const rentData = {
    name: fullName,
    email,
    phone: tel,
    startDate,
    endDate,
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'tel':
        setTel(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'fullName':
        setFullName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
    }
  };
  useEffect(() => {}, [
    fullName,
    email,
    tel,
    startDate,
    endDate,
    dispatch,
    match,
  ]);

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

  const handleStartDateChange = (date) => {
    setStartDate(date);
    console.log(startDate);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
    console.log(endDate);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    function daysBetween(date1, date2) {
      const ONE_DAY = 1000 * 60 * 60 * 24;

      const differenceMs = Math.abs(date1 - date2);

      return Math.round(differenceMs / ONE_DAY);
    }

    const days = daysBetween(startDate, endDate);

    console.log(days);
    dispatch(rentCar(rentData, match.params.id));
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
                    placeholder="Enter Your name"
                    fullWidth={true}
                    value={fullName}
                    onChange={onChangeHandler}
                  />{' '}
                  <TextField
                    required={true}
                    type="text"
                    name="lastName"
                    id="lastName"
                    label="Last Name"
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
                    type="tel"
                    name="tel"
                    id="standard-basic-email"
                    label="Phone number"
                    placeholder="Enter Your phone number"
                    fullWidth={true}
                    value={tel}
                    onChange={onChangeHandler}
                  />
                  <StartDatePicker
                    onChangeHandler={handleStartDateChange}
                    startDate={startDate}
                  />
                  <EndDatePicker
                    onChangeHandler={handleEndDateChange}
                    endDate={endDate}
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
