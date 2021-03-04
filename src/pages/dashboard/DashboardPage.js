import React, { useEffect } from 'react';
import './dashboard.style.css';
import { Container, Grid, Button, Paper } from '@material-ui/core';
import Table from '../../components/tables/Table';
// import TicketTable from '../../components/table/TicketTable';

import CarCard from '../../components/car-card/CarCard';

const carList = [
  {
    id: '1324423',
    brend: 'Toyota',
    model: 'Yaris',
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
    available: false,
  },
  {
    id: '1324423',
    brend: 'Toyota',
    model: 'Rav4',
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
    available: true,
  },
  {
    id: '1324423',
    brend: 'Renault',
    model: 'Megane',
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
    available: false,
  },
  {
    id: '1324423',
    brend: 'Renault',
    model: 'Megane',
    rentDate: '23.02.2021',
    dueDate: '01.03.2021',
    available: true,
  },
];

const DashboardPage = () => {
  //   const pendingTickets = tickets.filter((f) => f.status === 'Otvoren');

  useEffect(() => {}, []);

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
                Available cars:
                <span>otvorenih</span>
              </h3>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container jusify="center" alignItems="center">
        {carList.map((i, idx) => (
          <Grid className="car-card-div" key={idx} item xs={12} md={6} xlg={4}>
            <CarCard
              brand={i.brend}
              model={i.model}
              id={i.id}
              available={i.available}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;
