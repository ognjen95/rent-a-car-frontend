import React, { useState, useEffect, useLayoutEffect } from 'react';
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
  CircularProgress,
} from '@material-ui/core';
import './car-page.style.css';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from './getCarAction';
import { editCar, deleteCar } from './CarEditAction';
import { editCarReset } from './CarEditSlice';

const CarPage = ({ match, history }) => {
  const { car, isLoading, error } = useSelector((state) => state.car);
  const { success, isLoading: isEdited, error: editedtError } = useSelector(
    (state) => state.editCar
  );
  const [vehicleType, setVehicleType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [seats, setSeats] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [price, setPrice] = useState('');
  const [isUplaoding, setIsUploading] = useState('');
  const dispatch = useDispatch();

  const formData = {
    brand,
    model,
    year,
    fuel,
    seats,
    imgUrl,
    vehicleType,
    price,
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'vehicleType') {
      setVehicleType(value);
    } else if (name === 'brand') {
      // setBrand(value); disabled
    } else if (name === 'model') {
      // setModel(value); disabled
    } else if (name === 'year') {
      setYear(value);
    } else if (name === 'fuel') {
      setFuel(value);
    } else if (name === 'seats') {
      setSeats(value);
    } else if (name === 'imgUrl') {
      setImgUrl(value);
    } else if (name === 'price') {
      setPrice(value);
    }
  };

  useEffect(() => {
    dispatch(editCarReset());
    dispatch(getCar(match.params.id));

    if (!car) {
      return null;
    } else {
      setBrand(car.brand);
      setModel(car.model);
      setYear(car.year);
      setFuel(car.fuel);
      setSeats(car.seats);
      setImgUrl(car.imgUrl);
      setPrice(car.price);
      setVehicleType(car.vehicleType);
    }
  }, [
    dispatch,
    car.brand,
    car.model,
    car.year,
    car.fuel,
    car.seats,
    car.imgUrl,
    car.price,
    car.vehicleType,
  ]);
  // file uploading
  const uploadFileHandler = async (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('imgUrl', file);
    setIsUploading(true);

    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      if (file) {
        const { data } = await axios.post(
          'http://localhost:5000/api/upload ',
          formData,
          config
        );
        setImgUrl(data);

        setIsUploading(false);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      setIsUploading(false);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!formData) return;
    dispatch(editCar(formData, match.params.id));
  };
  const deleteHandler = () => {
    dispatch(deleteCar(match.params.id));
    history.push('/dashboard');
  };
  return (
    <Container className="car-wraper">
      <Paper className="car-paper" elevation={12}>
        <div className="del-btn-container">
          <Button
            onClick={deleteHandler}
            name="delete"
            className="del-btn"
            variant="outlined"
            color="secondary"
          >
            Delete Car
          </Button>
        </div>
        <Grid direction="column" jutify="center" alignItems="center" container>
          <Grid xs={12} item>
            <h1>Edit car</h1>
            <br />
          </Grid>
          <Grid xs={12} item>
            {isLoading ? (
              <h1>loading</h1>
            ) : (
              <form onSubmit={onSubmitHandler}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Vehicle Type
                  </InputLabel>
                  <Select
                    disabled={true}
                    labelId="demo-simple-select-"
                    id="vehicleType"
                    name="vehicleType"
                    onChange={onChangeHandler}
                    value={vehicleType}
                  >
                    {['Luxury', 'SUV', 'Estate', 'Economy', 'Cargo'].map(
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
                <TextField
                  disabled={true}
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
                  disabled={true}
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
                    {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map(
                      (i, idx) => (
                        <MenuItem
                          key={idx}
                          value={i.toLowerCase()}
                          name={i.toLowerCase()}
                        >
                          {i}
                        </MenuItem>
                      )
                    )}
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
                  id="car-model"
                  label="Upload image"
                  placeholder="Type img url or choose file"
                  fullWidth={false}
                  value={imgUrl}
                  onChange={uploadFileHandler}
                />
                <label htmlFor="imgUrl"></label>
                <input
                  name="imgUrl"
                  onChange={uploadFileHandler}
                  type="file"
                ></input>
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
                {editedtError && <Alert severity="error"> {error}</Alert>}
                {success && <Alert severity="success"> Car edited </Alert>}
                {isEdited ? (
                  <CircularProgress />
                ) : (
                  <Button
                    name="edit"
                    fullWidth={true}
                    style={{ marginTop: '2rem', float: 'right' }}
                    className="btn"
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Save changes
                  </Button>
                )}
              </form>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CarPage;
