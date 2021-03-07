import React, { useEffect } from 'react';
import './cars-page.style.css';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import Table from '../../components/tables/Table';

import { CircularProgress } from '@material-ui/core';

import { Link } from 'react-router-dom';
import SearchForm from '../../components/search-form/SearchForm';

import { useDispatch, useSelector } from 'react-redux';
import { getCarList } from '../dashboard/DashboardAction';
const carsTableHeaders = [
  'img',
  'ID',
  'Brand',
  'Model',
  'Vehicle type',
  'Construction Year',
  'Fuel type',
  'Seats',
  'Price per day - $',
  'Available vehicles',
];

const CarsPage = () => {
  //   const pendingTickets = tickets.filter((f) => f.status === 'Otvoren');
  const dispatch = useDispatch();
  const { isLoading, carList, error } = useSelector((state) => state.carList);

  useEffect(() => {
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
                <span>10</span>
              </h3>
            </Paper>
          </Grid>
          <Grid className="stats-grid" xs={12} md={4} item>
            <Paper elevation={6} className="stats">
              <h3>
                Rented cars:
                <span>otvorenih</span>
              </h3>
            </Paper>
          </Grid>
          <Grid className="stats-grid" xs={12} md={4} item>
            <Paper elevation={6} className="stats">
              <h3>
                Available cars:
                <span>otvorenih</span>
              </h3>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
        >
          <Grid item>
            <Link to="/cars/new-car">
              <Button
                className="btn"
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                style={{ fontSize: '1.2rem', margin: '0 1rem' }}
              >
                + new car
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item justify="space-between" container>
          <Grid item>
            <h3>Car list</h3>
          </Grid>

          <Grid item>
            <SearchForm />
          </Grid>
        </Grid>

        <Grid item container alignItems="center" justify="center">
          <Grid
            style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
            item
          >
            <Table
              toLink={'car'}
              tableHeaders={carsTableHeaders}
              tableList={carList}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsPage;
