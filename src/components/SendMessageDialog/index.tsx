import React from 'react';
import {TransitionProps} from "@material-ui/core/transitions";
import {Button, Dialog, Grid, Slide, TextField, withStyles, WithStyles} from "@material-ui/core";
import styles from "./styles";
import {Person} from "../../types/person";
import {AutocompleteValue} from "../AutocompleteInput/types";
import AutocompleteInput from "../AutocompleteInput";

interface SendMessageDialogProps extends WithStyles<typeof styles>{
    openDialog: boolean,
    onDialogClose: (persons: Person[]) => void,
    contacts: Person[],
    selectedPersons: Person[],
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SendMessageDialog(props: SendMessageDialogProps) {
    const personToAutocompleteValue = (person: Person): AutocompleteValue<Person> => {
      return {
          title: `${person.firstName} ${person.lastName}`,
          value: person,
      }
    };

    const toBlock = (persons: Person[], selectedPersons: Person[]) => (
        <Grid container className={props.classes.autocompleteContainer}>
            <AutocompleteInput defaultValues={selectedPersons.map(personToAutocompleteValue)}
                               values={persons.map(personToAutocompleteValue)}
                               label="Получатели"/>
        </Grid>
    );

    const textBlock = () => (
        <Grid container className={props.classes.container}>
            <TextField
                label="Сообщение"
                multiline
                rows="4"
                defaultValue=""
                className={props.classes.messageTextBox}
                variant="outlined" />
        </Grid>
    );

    const actions = () => (
        <Grid
            container
            className={props.classes.container}
            direction="row"
            justify="flex-end"
            alignItems="flex-end">
            <Button variant="contained" color="primary">
                Отправить
            </Button>
        </Grid>
    );

    return (
        <Dialog open={props.openDialog}
                TransitionComponent={Transition}
                onClose={() => props.onDialogClose(props.selectedPersons)}
                keepMounted>
            <main className={props.classes.layout}>
                {toBlock(props.contacts, props.selectedPersons)}
                {textBlock()}
                {actions()}
            </main>
        </Dialog>
    )
}

export default withStyles(styles)(SendMessageDialog);