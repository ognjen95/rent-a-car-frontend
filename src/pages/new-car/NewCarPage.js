import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const NewCarPage = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [seats, setSeats] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [price, setprice] = useState('');

  const formState = {
    brand,
    model,
    year,
    fuel,
    seats,
    imgUrl,
    price,
  };
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
      case 'year':
        setYear(value);
        break;
      case 'fuel':
        setFuel(value);
        break;
      case 'seats':
        setSeats(value);
        break;
      case 'imgUrl':
        setImgUrl(value);
        break;
      case 'price':
        setprice(value);
        break;
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Container className="new-costumer-wraper">
      <Paper className="new-costumer-paper" elevation={12}>
        <Grid direction="column" jutify="center" alignItems="center" container>
          <Grid xs={12} item>
            <h1>Add new car</h1>
            <br />
          </Grid>
          <Grid xs={12} item>
            <form onSubmit={onSubmitHandler}>
              {/* brand */}
              <TextField
                required={true}
                type="text"
                name="brand"
                id="brand"
                label="Brand"
                placeholder="Enter car brend"
                fullWidth={true}
                value={brand}
                onChange={onChangeHandler}
              />{' '}
              {/* Model */}
              <TextField
                required={true}
                type="text"
                name="model"
                id="car-model"
                label="Model"
                placeholder="Enter Car model"
                fullWidth={true}
                value={model}
                onChange={onChangeHandler}
              />
              {/* Construction year */}
              <TextField
                required={true}
                type="number"
                name="year"
                id="year"
                label="Construction Year"
                placeholder="Enter Your phone number"
                fullWidth={true}
                value={year}
                onChange={onChangeHandler}
              />
              {/* fuel */}
              <FormControl>
                <InputLabel id="demo-simple-select-label">Fuel</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="fuelSelect"
                  value={fuel}
                  name="fuel"
                  onChange={onChangeHandler}
                >
                  {['petrol', 'diesel', 'hybrid', 'electric'].map((i, idx) => (
                    <MenuItem key={idx} name={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* Num of seats */}
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Num of seats
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="seats"
                  value={seats}
                  onChange={onChangeHandler}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, idx) => (
                    <MenuItem key={idx} name={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* Upload */}
              <TextField
                required={true}
                type="text"
                name="imgUrl"
                id="imgUrl"
                label="Upload img url"
                placeholder="Img path"
                fullWidth={false}
                value={imgUrl}
                onChange={onChangeHandler}
              />
              <Button
                style={{ marginTop: '2rem ' }}
                variant="contained"
                color="default"
                startIcon={<CloudUploadIcon />}
              >
                Upload
              </Button>
              {/* Price */}
              <TextField
                required={true}
                type="number"
                name="price"
                id="price"
                label="Car price per day"
                placeholder="Enter car price per day"
                fullWidth={false}
                value={price}
                onChange={onChangeHandler}
              />
              {/* Submit */}
              <br />
              <Button
                fullWidth={true}
                style={{ marginTop: '2rem', float: 'right' }}
                className="btn"
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Add car
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NewCarPage;
