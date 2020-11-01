import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    fieldStyle: {
        border: "5px"
    }
})

class FormField extends React.Component {
    //var classes = useStyles();
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
    return (
    
    <div>
        
        <form onSubmit={this.handleSubmit} className={useStyles.fieldStyle}>
            <TextField 
                id="standard-basic"
                label="Enter some Text"
                value={this.state.input} 
                onChange={this.displayText}
                />
            <Button variant="contained" color="primary" type="sumbit">
               Submit and see that
            </Button>
        </form>
        <p>{this.state.submit}</p>
    </div>  
   
    );
    }
};

export default FormField;