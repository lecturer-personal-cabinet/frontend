import React from 'react';
import {Person} from "../../types/person";
import styles from './styles'
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, Paper, Table, TableCell, TableContainer, TableRow, WithStyles, withStyles} from "@material-ui/core";

interface PersonsListProps extends WithStyles<typeof styles> {
    persons: Person[],
}

function PersonsList(props: PersonsListProps) {
    const actionCell = () => (
        <TableCell align="center">
            <InfoIcon className={props.classes.actionIcon} />
            <ChatIcon className={props.classes.actionIcon} />
        </TableCell>
    );

    const personRow = (person: Person) => (
      <TableRow key={person.id}>
          <TableCell align="center">
              <Avatar alt={person.firstName + ' ' + person.lastName} src={person.avatarSrc}/>
          </TableCell>
          <TableCell align="left">
              {person.firstName + ' '
              + person.lastName + ' '
              + (!person.patronymic ? '' : person.patronymic)}
          </TableCell>
          {actionCell()}
      </TableRow>
    );

    return (
        <TableContainer component={Paper}>
            <Table className={props.classes.table}>
                {props.persons.map(personRow)}
            </Table>
        </TableContainer>
    );
}

export default withStyles(styles)(PersonsList)