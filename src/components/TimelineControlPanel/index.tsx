import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {Grid, Paper, WithStyles} from "@material-ui/core";
import {AddPhotoAlternate, PostAdd} from "@material-ui/icons";

interface Props extends WithStyles<typeof styles> {
    onPostAddClick: () => void,
}

function TimelineControlPanel(props: Props) {
    return (
        <Paper className={props.classes.root}>
            <Grid container>
                <PostAdd className={props.classes.actionIcon} onClick={() => props.onPostAddClick()} />
                <AddPhotoAlternate className={props.classes.actionIcon} />
            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(TimelineControlPanel);