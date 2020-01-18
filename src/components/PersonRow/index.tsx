import React from 'react';
import {Avatar, Grid, List, ListItem, Paper, TableRow, withStyles, WithStyles} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import styles from "./styles";
import {Person} from "../../types/person";

interface PersonRowProps extends WithStyles<typeof styles> {
    person: Person
}

function PersonRow(props: PersonRowProps) {
    const avatar = (
        (props.person.avatarSrc !== null) ?
        <Avatar alt={props.person.firstName + ' ' + props.person.lastName} src={props.person.avatarSrc}/>
        :
        <Avatar>V.B.</Avatar>
    );

    return (
        <Paper className={props.classes.root}>
            <Grid container>
                <Grid item md={1}>
                    {avatar}
                </Grid>
                <Grid item md={8} className={props.classes.mainText}>
                    {props.person.firstName + ' '
                    + props.person.lastName + ' '
                    + (!props.person.patronymic ? '' : props.person.patronymic)}
                </Grid>
                <Grid item md={3} className={props.classes.actions}>
                    <List className={props.classes.actionsList}>
                        <ListItem>
                            <InfoIcon className={props.classes.actionItem}/>
                        </ListItem>
                        <ListItem>
                            <ChatIcon className={props.classes.actionItem}/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default withStyles(styles)(PersonRow);