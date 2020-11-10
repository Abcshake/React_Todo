import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import  Header  from './Header'
import Content from './Content';
import FormField from './FormField';
import Slider from './Slider';
import Card from './card';

const App = () => {
  return (
    <Grid container direction="column" justify="center" spacing={3}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container spacing={3} justify="center" direction="row">
        <Grid item xs={false}/>
          <Grid item> 
            <Content />
          </Grid> 
          <Grid item>
            <FormField />
          </Grid>
      <Grid item xs={false} sm={2}/>
      <Grid item container alignItems="center" direction="column">
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