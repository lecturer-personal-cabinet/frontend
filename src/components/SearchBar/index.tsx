import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {InputBase, WithStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface Props extends WithStyles<typeof styles> {
    onSearch: (value: string) => void,
}

function SearchBar(props: Props) {
    return (
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
}

export default withStyles(styles)(SearchBar);