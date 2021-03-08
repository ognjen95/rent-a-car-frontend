import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

import { carReturn } from '../../pages/car-page/CarEditAction';
import { useDispatch } from 'react-redux';
const UserRentedCar = ({ imgUrl, fuel, brand, model, price, id, isRented }) => {
  const [returned, setReturned] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (window.confirm('This car is realy returned?')) {
      setReturned(event.target.checked);
      if (!returned) dispatch(carReturn(id));
      console.log(event.target.checked);
    }
  };

  useEffect(() => {
    // setReturned(!isRented);
  }, [returned]);
  return (
    <Paper elevation={12} className="customer-paper customer-car">
      {isRented ? (
        <Grid container>
          <Grid item xs={12} sm={6}>
            <img src={'http://localhost:5000' + imgUrl} alt="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className="customer-car-text">
              <h3>
                {brand} - {model}
              </h3>
              <h3>{fuel}</h3>
              <h3>{price}$ per day </h3>
              <div>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={returned}
                        onChange={handleChange}
                        name="checkbox"
                        color="primary"
                      />
                    }
                    label="Return car"
                  />
                </FormGroup>
              </div>
            </Container>
          </Grid>
        </Grid>
      ) : (
        <Grid style={{ opacity: '.5' }} container>
          <Grid item xs={12} sm={6}>
            <img src={'http://localhost:5000' + imgUrl} alt="" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className="customer-car-text">
              <h3>
                {brand} - {model}
              </h3>
              <h3>{fuel}</h3>
              <h3>{price}$ per day </h3>

              {!isRented && <h2>Car is returned</h2>}
            </Container>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default UserRentedCar;
