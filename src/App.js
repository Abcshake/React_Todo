import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import  Header  from './Header'
import FormField from './FormField';
import Slider from './Slider';
import Card from './card';
import Date from './Datepicker';

const App = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container spacing={2} justify="center" direction="row">
          <Grid item>
            <FormField />
          </Grid>
      <Grid item/>
      <Grid item container alignItems="center" direction="column" spacing = {5}>
          <Grid item>
            <Date />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
      </Grid> 
      </Grid>
    </Grid>
  )
}
export default App;