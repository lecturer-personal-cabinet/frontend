import React from 'react';
import {Grid, InputBase, Paper, WithStyles, withStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    onSearch: (value: string) => void,
}

function ListActionBar (props: Props) {
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
                onChange={(e) => props.onSearch(e.target.value)}
            />
        </div>
    );

    return (
        <Paper className={props.classes.root}>
            <Grid container className={props.classes.container} spacing={3}>
                <Grid item md={9}/>
                <Grid item md={3}>
                    {searchBar}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(ListActionBar);