import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts(type) {
  const classes = useStyles();

  return (
    //error warning info success
    <div className={classes.root}>
      <Alert severity={type}>This is an error alert — check it out!</Alert>
    </div>
  );
}
