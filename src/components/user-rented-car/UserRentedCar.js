import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
const UserRentedCar = ({ imgUrl, fuel, brand, model, price, rentDate }) => {
  const { car, isLoading: carLoading, error: errorLoading } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();
  const [returned, SetReturned] = useState(false);
  const onChangeHandler = (e) => {
    SetReturned(e.target.checked);
  };

  return (
    <Paper elevation={12} className="customer-paper customer-car">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={'http://localhost:5000' + imgUrl} alt="" />
          {/* <div>{img}</div> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container className="customer-car-text">
            <h3>
              {brand} - {model}
            </h3>
            <h3>{fuel}</h3>
            <h3>{price}$ per day </h3>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={returned}
                    onChange={onChangeHandler}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Car returned"
              />
            </div>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserRentedCar;
