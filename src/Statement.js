import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core'
import theme from './theme'



export default function Statement() {
  

  return (
    <div theme={theme}>
        <Container maxWidth="lg">
            <Typography align="center" style={{ backgroundColor: '#cfe8fc', height: '10vh', width: "50vh"}}>
                Hope your day is better now!
            </Typography>
        </Container>
    </div>
  );
}