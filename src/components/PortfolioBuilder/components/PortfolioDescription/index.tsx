import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Paper, Typography, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    subtitle: string,
    content: string,
}

function PortfolioDescription(props: Props) {
    return (
        <Paper className={props.classes.root}>
            <Typography variant="h5" component="h5">
                <span className={props.classes.subtitle}>{props.subtitle}</span>
            </Typography>
            <Typography className={props.classes.content}>
                <span>{props.content}</span>
            </Typography>
        </Paper>
    );
}

export default withStyles(styles)(PortfolioDescription);