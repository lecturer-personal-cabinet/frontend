import React from 'react';
import {Grid, InputBase, Paper, WithStyles, withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import styles from "./styles";

interface ListActionBarProps extends WithStyles<typeof styles> {

}

function ListActionBar (props: ListActionBarProps) {
    const searchBar = (
        <div className={props.classes.search}>
            <div className={props.classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: props.classes.inputRoot,
                    input: props.classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );

    return (
        <Paper className={props.classes.root}>
            <Grid container className={props.classes.container} spacing={3}>
                <Grid item xs={10}/>
                <Grid item xs={2}>
                    {searchBar}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(ListActionBar);