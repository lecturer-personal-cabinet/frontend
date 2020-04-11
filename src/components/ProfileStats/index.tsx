import {Grid, WithStyles} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import React from "react";
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    metric: string,
    title: string,
}

function ProfileStats(props: Props) {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item className={props.classes.metric}>
                {props.metric}
            </Grid>

            <Grid item className={props.classes.title}>
                {props.title}
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(ProfileStats);