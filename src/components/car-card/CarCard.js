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
import { Link } from 'react-router-dom';

const CarCard = ({ img, id, available, brand, model }) => {
  const [returned, SetReturned] = useState(false);
  const onChangeHandler = (e) => {
    SetReturned(e.target.checked);
  };

  return (
    <Paper elevation={12} className="car-card-paper car-card  ">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <img src={process.env.PUBLIC_URL + '/imgs/carBg.jpg'} alt="" />
          {/* <div>{img}</div> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container className="car-card-text">
            <div>
              <h3>
                {brand} - {model}
              </h3>
            </div>

            <div>
              {available ? (
                <h3 style={{ color: 'green' }}>Available</h3>
              ) : (
                <h3 style={{ color: 'red' }}>Not Available</h3>
              )}
            </div>
            <div>
              {available ? (
                <Link to={`/rent-a-car/${id}`}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    color="primary"
                  >
                    Rent
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  disabled
                >
                  Rent
                </Button>
              )}
            </div>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarCard;
