import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import  Header  from './Header'
import Content from './Content';
import FormField from './FormField';


const App = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container spacing={3} direction="row">
        <Grid item xs={false} sm={2}/>
          <Grid item> 
            <Content />
          </Grid> 
          <Grid item>
            <FormField />
          </Grid>
        <Grid item xs={false} sm={2}/>
      </Grid>
    </Grid>
  )
}
export default App;