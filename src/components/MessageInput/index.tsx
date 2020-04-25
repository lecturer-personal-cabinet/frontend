import React from 'react';
import {Button, Grid, TextField, WithStyles, withStyles} from "@material-ui/core";
import styles from "./styles";

interface Props extends WithStyles<typeof styles> {
    textFieldLabel: string,
    buttonText: string,
}

function MessageInput (props: Props) {
    return (
        <Grid container spacing={2}>
            <Grid item md={11}>
                <TextField
                    label={props.textFieldLabel}
                    variant="outlined"
                    className={props.classes.textInput}
                />
            </Grid>
            <Grid item md={1}>
                <Button
                    variant="contained"
                    color="primary"
                    className={props.classes.actionButton}
                >
                    {props.buttonText}
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(MessageInput);