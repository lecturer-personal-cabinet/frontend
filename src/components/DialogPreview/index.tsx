import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Avatar, Grid, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
}

function DialogPreview(props: Props) {
    return (
        <Grid
            container
            alignItems='center'
        >
            <Grid item md={1}>
                <Avatar/>
            </Grid>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item>asd</Grid>
                    <Grid item>asd</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(DialogPreview);