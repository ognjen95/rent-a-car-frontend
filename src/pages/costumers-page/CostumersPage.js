import React, { useEffect } from 'react';
import './costumers-page.style.css';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import Table from '../../components/tables/Table';

import { CircularProgress } from '@material-ui/core';

import { Link } from 'react-router-dom';
import SearchForm from '../../components/search-form/SearchForm';
const tableHeaders = [
  'ID',
  'Name',
  'Vehicle',
  'Email',
  'Phone',
  'Rent date',
  'Due date',
];
const tableList = [
  {
    id: 984353649,
    name: 'Ognjen',
    vehicle: 'Toyota - Yaris',
    email: 'atlagicognjen@gmail.com',
    phone: '065590111',
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
  },
  {
    id: 353649,
    name: 'Isidora',
    vehicle: 'Toyota - Yaris',
    email: 'atlagicognjen@gmail.com',
    phone: '065590111',
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
  },
];

const CostumersPage = () => {
  useEffect(() => {}, []);

  return (
    <Container>
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
              Total costumers:
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
      </Grid>
      <Grid container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
        >
          <Grid item>
            <Link to="/costumers/new-costumer">
              <Button
                className="btn"
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                style={{ fontSize: '1.2rem', margin: '0 1rem' }}
              >
                + costumer
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item justify="space-between" container>
          <Grid item>
            <h3>Costumers list</h3>
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
              toLink={'costumer'}
              tableHeaders={tableHeaders}
              tableList={tableList}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CostumersPage;
