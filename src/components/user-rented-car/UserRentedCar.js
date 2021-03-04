import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  FormControlLabel,
  Checkbox,
  handleChange,
  CircularProgress,
} from '@material-ui/core';

const UserRentedCar = ({ img, brend, model, rentDate }) => {
  const [returned, SetReturned] = useState(false);
  const onChangeHandler = (e) => {
    SetReturned(e.target.checked);
  };

  return (
    <Paper elevation={12} className="customer-paper customer-car">
      <Grid container>
        <Grid item xs={6}>
          <img src={process.env.PUBLIC_URL + '/imgs/carBg.jpg'} alt="" />
          {/* <div>{img}</div> */}
        </Grid>
        <Grid item xs={6}>
          <Container className="customer-car-text">
            <div>{brend}</div>
            <div> {model}</div>
            <div>{rentDate} </div>
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
