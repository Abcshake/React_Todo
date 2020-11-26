import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = withStyles({
    root: {
        maxWidth: 345,
    }
})

var url = "https://api.wordnik.com/v4/word.json/"
var word = "charming"
var url2 = "/examples?includeDuplicates=false&useCanonical=false&limit=5&api_key=8xjha7s9g4047yn5nu0v8pvlasuazkl4yaqt72csvkepbf161"



class MediaCard extends React.Component{
    //const classes = useStyles

    state= {
        word: null,
        example: null
    };

    async componentDidMount(){
        const finalUrl = url + word + url2;
        const response = await fetch(finalUrl);
        const data = await response.json();
        this.setState({word: data.examples[0].provider.word,
                        example: data.examples[0].provider.text });
    }

    render(){
    return ( 
        <Card>
            <CardActionArea>
                <CardMedia
                    image="/src/images/stoa_poikile.jpg"
                    title="Stoic Porch"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {this.state.word}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.example}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="secondary">
                    Like
                </Button>
            </CardActions>
        </Card>
    )
    }
}

export default MediaCard;