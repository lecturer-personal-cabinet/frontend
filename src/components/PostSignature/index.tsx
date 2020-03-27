import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Grid, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    fullName: string,
    timestamp: string,
}

function PostSignature(props: Props) {
    return (
        <Grid container className={props.classes.signature}>
            <Grid item md={6}>
                {props.fullName}
            </Grid>
            <Grid item md={6} className={props.classes.signatureTimestamp}>
                {props.timestamp}
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(PostSignature);