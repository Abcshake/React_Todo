import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

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
                <Typography className={classes.typographyStyle}
                 align="center" variant="h3">
                    Daily Journal App
                </Typography>
                <Badge badgeContent={4} color="primary">
                    <MailIcon />
                </Badge>
            </Toolbar>
        </AppBar>
    );
};

export default Header;