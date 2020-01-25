import React from 'react';
import {Person} from "../../types/person";
import styles from './styles'
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import {
    Avatar,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    WithStyles,
    withStyles
} from "@material-ui/core";

interface PersonsListProps extends WithStyles<typeof styles> {
    persons: Person[],
    onDialogIconClick: (persons: Person[]) => void,
    onInfoIconClick: (persons: Person[]) => void,
}

function PersonsList(props: PersonsListProps) {
    const actionCell = (person: Person) => (
        <TableCell align="center">
            <InfoIcon className={props.classes.actionIcon} onClick={() => props.onInfoIconClick([person])} />
            <ChatIcon className={props.classes.actionIcon} onClick={() => props.onDialogIconClick([person])} />
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
          {actionCell(person)}
      </TableRow>
    );

    return (
        <TableContainer component={Paper}>
            <Table className={props.classes.table}>
                <TableHead/>
                {props.persons.map(personRow)}
            </Table>
        </TableContainer>
    );
}

export default withStyles(styles)(PersonsList)