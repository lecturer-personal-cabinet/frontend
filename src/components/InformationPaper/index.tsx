import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Paper, Typography, WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    content: string,
    title: string,
}

function InformationPaper(props: Props) {
    return (
        <Paper className={props.classes.root}>
            <h2>{props.title}</h2>
            <Typography>
                <pre style={{ fontFamily: 'inherit' }}>
                    {props.content}
                </pre>
            </Typography>
        </Paper>
    );
}

export default withStyles(styles)(InformationPaper);