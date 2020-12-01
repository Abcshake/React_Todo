import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from './card';

class FormField extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.displayText = this.displayText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
        
        displayText(event) {
            this.setState({
                input: event.target.value
            });
        }
        handleSubmit(event) {
            event.preventDefault()
            this.setState({
              submit: this.state.input
            });
          }
    render() {
        let submit = this.state.submit
        let box;
        if (submit !== ""){
            box = 
            <Box display="flex"
            p={9} m={2} bgcolor= "#a0d8f2"
            fontSize = {{md: 'h5.fontSize'}}
             >
                {this.state.submit}
            </Box>
        } else {
            box = 
            <box></box>
        }
    return (
    
    <div>
        
        <form onSubmit={this.handleSubmit}>
            <TextField 
                id="standard-basic"
                label="How was your day :)"
                value={this.state.input} 
                onChange={this.displayText}
                />
            <Button variant="contained" color="primary" type="submit">
               Submit and see that
            </Button>
        </form>
        {box}
        
            
    </div>  
   
    );
    }
};

export default FormField;