import React from 'react';
import {Grid, Paper, WithStyles, withStyles} from "@material-ui/core";
import styles from "./styles";
import SearchBar from "../SearchBar";

interface Props extends WithStyles<typeof styles> {
    onSearch: (value: string) => void,
}

function ListActionBar (props: Props) {
    return (
        <Paper className={props.classes.root}>
            <Grid container className={props.classes.container} spacing={3}>
                <Grid item md={9}/>
                <Grid item md={3}>
                    <SearchBar onSearch={props.onSearch} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(ListActionBar);