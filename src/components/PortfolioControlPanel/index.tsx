import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Grid, Paper, WithStyles} from "@material-ui/core";
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

interface Props extends WithStyles<typeof styles> {
    onAddPortfolioCardClick: () => void,
}

function PortfolioControlPanel(props: Props) {
    return (
        <Paper className={props.classes.root}>
            <Grid container>
                <AddToPhotosIcon className={props.classes.actionIcon} onClick={() => props.onAddPortfolioCardClick()} />
            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(PortfolioControlPanel);