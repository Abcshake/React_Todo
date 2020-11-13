import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      height: theme.spacing(16),
    },
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper width="75%">
        <Typography
            fontFamily="Verdana"
        >
            I hope your day is better now!
        </Typography>
        </Paper>
    </div>
  );
}