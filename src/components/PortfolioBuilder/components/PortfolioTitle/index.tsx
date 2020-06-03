import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Paper, Typography, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    title: string,
}

function PortfolioTitle(props: Props) {
    return (
        <Typography gutterBottom variant="h4" component="h4" align={'center'}>
            <span className={props.classes.text}>{props.title}</span>
        </Typography>
    );
}

export default withStyles(styles)(PortfolioTitle);