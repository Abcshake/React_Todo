import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Button, Box } from '@material-ui/core';



function valuetext(value) {
  return `${value}°C`;
}

class DiscreteSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {isClicked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({isClicked: true});
  }

  render(){
    let box;
    if(this.state.isClicked){
      box = 
      <Box display="flex"
       p={9} m={2} bgcolor="#a0d8f2"
       fontSize = {{md: 'h4.fontSize'}}
       >
        {"I hope your day is better now :)"}
      </Box>
    } else {
      box = 
      <Box display="flex"
       p={9} m={2} bgcolor="#ffbaf6"
       fontSize = {{md: 'h4.fontSize'}}
       >
        {"Please Select something on the Scale"}
      </Box>
    }

  return (
    <div>
      <Typography id="discrete-slider" gutterBottom>
       Happiness Scale
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
      />
      <Button variant="contained" color="primary" type="submit" onClick={this.handleClick}>
            Submit Please
      </Button>  
      {box}
    </div>
  );
  }
}

export {DiscreteSlider as default};


