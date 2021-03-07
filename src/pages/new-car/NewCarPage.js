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
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { useDispatch, useSelector } from 'react-redux';
import { addNewCar } from './NewCarAction';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const NewCarPage = () => {
  const classes = useStyles();

  const [brand, setBrand] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [seats, setSeats] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [price, setprice] = useState('');
  const [isUplaoding, setIsUploading] = useState('');

  const dispatch = useDispatch('');
  const formState = {
    brand,
    model,
    year,
    fuel,
    seats,
    imgUrl,
    price,
    vehicleType,
  };
  useEffect(() => {}, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'vehicleType':
        setVehicleType(value);
        break;
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
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('imgUrl', file);
    setIsUploading(true);

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      const { data } = await axios.post(
        'http://localhost:5000/api/upload ',
        formData,
        config
      );

      setImgUrl(data);
      console.log(imgUrl);
      setIsUploading(false);

      console.log(data);
    } catch (error) {
      console.log(error);
      setIsUploading(false);
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(addNewCar(formState));
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
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Vehicle Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-"
                  id="vehicleType"
                  name="vehicleType"
                  onChange={onChangeHandler}
                >
                  {['Hybrid', 'SUV', 'Estate', 'Economy', 'Cargo'].map(
                    (i, idx) => (
                      <MenuItem
                        key={idx}
                        name={i.toLowerCase()}
                        value={i.toLowerCase()}
                      >
                        {i}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
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
                  defaultValue={fuel}
                  name="fuel"
                  onChange={onChangeHandler}
                >
                  {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((i, idx) => (
                    <MenuItem
                      key={idx}
                      name={i.toLowerCase()}
                      value={i.toLowerCase()}
                    >
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
              <div>
                <TextField
                  required={true}
                  type="text"
                  name="imgUrl"
                  id="car-model"
                  label="Upload image"
                  placeholder="Type img url or choose file"
                  fullWidth={false}
                  value={imgUrl}
                  onChange={uploadFileHandler}
                />
                <label htmlFor="imgUrl">Choose a profile picture:</label>
                <input
                  name="imgUrl"
                  onChange={uploadFileHandler}
                  type="file"
                ></input>
                {/* <input
                  className={classes.input}
                  accept="image"
                  id="contained-button-file"
                  multiple
                  type="file"
                  name="imgUrl"
                  onChange={uploadFileHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    onChange={uploadFileHandler}
                    variant="contained"
                    color="primary"
                    component="span"
                  >
                    <CloudUploadIcon />
                    Upload
                  </Button>
                </label> */}
              </div>
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
