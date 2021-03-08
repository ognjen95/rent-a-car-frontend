import React, { useEffect } from 'react';
import './dashboard.style.css';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import CarCard from '../../components/car-card/CarCard';

import { useDispatch, useSelector } from 'react-redux';
import { getCarList } from './DashboardAction';
import SearchForm from '../../components/search-form/SearchForm';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { isLoading, carList, searchList, error } = useSelector(
    (state) => state.carList
  );
  const availableCars = carList.filter((f) => !f.isRented);

  useEffect(() => {
    console.log(carList.imgUrl);
    dispatch(getCarList());
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid
          item
          className="carStatsContainer"
          container
          alignItems="center"
          justify="center"
        >
          <Grid className="stats-grid" xs={12} md={4} item>
            <Paper elevation={6} className="stats">
              <h3>
                Total cars:
                <span>{carList.length}</span>
              </h3>
            </Paper>
          </Grid>
          <Grid className="stats-grid" xs={12} md={4} item>
            <Paper elevation={6} className="stats">
              <h3>
                Available cars:
                <span>{availableCars.length}</span>
              </h3>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid className="search-box-grid" xs={12} sm={6} item>
          <SearchForm />
        </Grid>
        <Grid xs={12} sm={6} item>
          <Link to="/cars/new-car">
            <Button
              className="btn"
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              style={{ float: 'right', fontSize: '1.2rem', margin: '0 1rem' }}
            >
              + new car
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container jusify="center" alignItems="center">
        {searchList.map((i, idx) => (
          <Grid
            className="car-card-div"
            key={idx}
            item
            xs={12}
            sm={6}
            md={4}
            xlg={3}
          >
            <CarCard
              imgUrl={i.imgUrl}
              brand={i.brand}
              model={i.model}
              year={i.year}
              id={i._id}
              isRented={i.isRented}
              price={i.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
