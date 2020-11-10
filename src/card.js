import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    }
})


export default function MediaCard(){
    const classes = useStyles
    return ( 
        <Card className={classes.root}>
            <CardActionArea>
                <Typography variant="h5" component="h2">
                    Stoia Poikile
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    The painted porch at Ancient Athens where the philosopher Zeno of Critium taught Stoicism   
                </Typography>
            </CardActionArea>
            <CardActionArea>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="secondary">
                    Like
                </Button>
            </CardActionArea>
        </Card>
    )
}