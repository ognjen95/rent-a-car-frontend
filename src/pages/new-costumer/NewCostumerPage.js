import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import './new-costumer.style.css';
import StartDatePicker from '../../components/date-picker/StartDatePicker';
import EndDatePicker from '../../components/date-picker/EndDatePicker';
const NewCostumerPage = ({ formChange, history }) => {
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
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <Container className="new-costumer-wraper">
      <Paper className="new-costumer-paper" elevation={12}>
        <Grid direction="column" jutify="center" alignItems="center" container>
          <Grid xs={12} item>
            <h1>Add new costumer</h1>
            <br />
          </Grid>
          <Grid xs={12} item>
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
              <FormControl>
                <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="brand"
                  value={brand}
                  name="brand"
                  onChange={onChangeHandler}
                >
                  {['Toyota', 'Renault', 'Citroen', 'Opel'].map((i, idx) => (
                    <MenuItem key={idx} name={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Model</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="model"
                  value={model}
                  name="model"
                  onChange={onChangeHandler}
                >
                  {brand ? (
                    ['Yaris', 'Megane', 'C4', 'Astra'].map((i, idx) => (
                      <MenuItem key={idx} name={i} value={i}>
                        {i}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem>Pick brend first</MenuItem>
                  )}
                </Select>
              </FormControl>
              <StartDatePicker />
              <EndDatePicker />
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
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NewCostumerPage;
