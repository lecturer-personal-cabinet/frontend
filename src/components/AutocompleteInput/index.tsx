/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from "./styles";
import {AutocompleteValue} from "./types";
import {withStyles, WithStyles} from "@material-ui/core";

interface AutocompleteInputProps<V> extends WithStyles<typeof styles> {
    values: AutocompleteValue<V>[],
    defaultValues: AutocompleteValue<V>[],
    label: string,
}

function AutocompleteInput <V> (props: AutocompleteInputProps<V>) {
    return (
        <main className={props.classes.root}>
            <Autocomplete
                multiple
                options={props.values}
                getOptionLabel={option => option.title}
                value={props.defaultValues}
                disableClearable
                renderInput={params => (
                    <TextField
                        {...params}
                        label={props.label}
                        variant="outlined"
                        fullWidth
                    />
                )}
            />
        </main>
    );
}

export default withStyles(styles)(AutocompleteInput);