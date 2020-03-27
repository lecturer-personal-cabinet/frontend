import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Grid, Hidden, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    fullName: string,
    timestamp: string,
}

function PostSignature(props: Props) {
    return (
        <Grid container className={props.classes.signature}>
            <Grid item sm={6} xs={12}>
                {props.fullName}
            </Grid>
            <Hidden xsDown>
                <Grid item sm={6} xs={12} className={props.classes.signatureTimestamp}>
                    {props.timestamp}
                </Grid>
            </Hidden>
            <Hidden mdUp={true}>
                <Grid item sm={6} xs={12}>
                    {props.timestamp}
                </Grid>
            </Hidden>
        </Grid>
    );
}

export default withStyles(styles)(PostSignature);