import React, { useEffect } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import Table from '../../components/tables/Table';
import { Link } from 'react-router-dom';
import { getCustomersList } from './CustomersAction';
import { useDispatch, useSelector } from 'react-redux';

const tableHeaders = ['ID', 'Name', , 'Email', 'Phone', 'Last Name'];

const CustomersPage = () => {
  const dispatch = useDispatch();

  const { customers } = useSelector((state) => state.customersList);

  useEffect(() => {
    dispatch(getCustomersList());
  }, [dispatch]);

  return (
    <Container>
      <Grid
        item
        className="carStatsContainer"
        container
        alignItems="center"
        justify="center"
      >
        <h3>
          Total customers:
          <span>10</span>
        </h3>
      </Grid>
      <Grid container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
        >
          <Grid item>
            <Link to="/customers/new-customer">
              <Button
                className="btn"
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                style={{ fontSize: '1.2rem', margin: '0 1rem' }}
              >
                + customer
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid item justify="space-between" container>
          <Grid item>
            <h3>Customer list</h3>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" justify="center">
          <Grid
            style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
            item
          >
            <Table
              toLink={'customer'}
              tableHeaders={tableHeaders}
              tableList={customers}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomersPage;
