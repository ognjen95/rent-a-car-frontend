import React from 'react';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CarCard = ({ img, price, id, available, brand, model, isRented }) => {
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
              <h2>{price}$ per day</h2>
            </div>

            <div>
              {!isRented ? (
                <h3 style={{ color: 'green' }}>Available</h3>
              ) : (
                <h3 style={{ color: 'red' }}>Not Available</h3>
              )}
            </div>
            <div>
              <Link to={`/car/${id}`}>
                <Button
                  style={{ marginRight: '6px' }}
                  variant="outlined"
                  size="medium"
                  color="secondary"
                >
                  Edit car
                </Button>
              </Link>
              {!isRented ? (
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
