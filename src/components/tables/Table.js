import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import './table.style.css';

const useStyles = makeStyles({
  table: { minWidth: 650 },
});

export default function BasicTable({ tableHeaders, tableList, toLink }) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((item, index) => (
              <TableCell key={index}>
                <h3>{item} </h3>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="center">
          {tableList.map((row, idx) => (
            <TableRow className="table-row" key={idx}>
              {Object.keys(row).map((col, i) => (
                <TableCell key={i} align="left">
                  <Link to={`/${toLink}/${row._id}`}>{row[col]}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
