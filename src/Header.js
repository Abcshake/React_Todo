import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';

const useStyles = makeStyles(() =>({
    typographyStyle: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <AccountBalanceRoundedIcon />
                <Typography className={classes.typographyStyle}>
                    React ToDo List!
                </Typography>
                
            </Toolbar>
        </AppBar>
    );
};

export default Header;