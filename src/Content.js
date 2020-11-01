import { Grid } from '@material-ui/core';
import React from 'react';
import SimpleAccordion from './SimpleAccordion';


const Content = () => {
    return (
    <div>
        <Grid container>
            <Grid Item>
                <SimpleAccordion />
            </Grid>
        </Grid>
    </div>
    )
};

export default Content;