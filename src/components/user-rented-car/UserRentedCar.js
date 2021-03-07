import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

const UserRentedCar = ({ imgUrl, fuel, brand, model, price, rentDate }) => {
  const [returned, SetReturned] = useState(false);
  const onChangeHandler = (e) => {
    SetReturned(e.target.checked);
  };

  return (
    <Paper elevation={12} className="customer-paper customer-car">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={process.env.PUBLIC_URL + '/imgs/carBg.jpg'} alt="" />
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
