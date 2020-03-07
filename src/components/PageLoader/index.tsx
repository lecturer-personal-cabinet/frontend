import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from "./styles";
import {WithStyles} from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {}

function PageLoader(props: Props) {
    return (
        <div className={props.classes.root}>
            <LinearProgress />
        </div>
    );
}

export default withStyles(styles)(PageLoader);