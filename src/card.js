import React from 'react';
//import { useStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Paper from '@material-ui/core/Paper';
import FormField from './FormField';
// const useStyles = withStyles({
//     root: {
//         maxWidth: 345,
//     }
// })

var url = "https://api.wordnik.com/v4/word.json/"
var word = "Charming"
var url2 = "/examples?includeDuplicates=false&useCanonical=false&limit=5&api_key=process.env.apikey"



class MediaCard extends React.Component{
    //const classes = useStyles
    // constructor(props) {
    //     super(props);
    //   }
    state= {
        word: null,
        example: null,
        loading: true
    }



    async componentDidMount(){
        const finalUrl = url + word + url2;
        const response = await fetch(finalUrl);
        const data = await response.json();
        this.setState({word: data.examples[0].word,
                        example: data.examples[0].text, loading:false });
    }

    render(){
       
        if (this.state.loading) {
            return <div>loading...</div>;
          }
      
          if (!this.state.word&&!this.state.example) {
            return <div>didn't find anything</div>;
          }
    return ( 
        <div>
        <Card>
            <CardActionArea>
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
        </div>
        
    )
    }
}

export default MediaCard;
