import React from 'react';
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
import {User} from "../../store/users/types";

interface UsersListProps extends WithStyles<typeof styles> {
    users: User[],
    onDialogIconClick: (users: User[]) => void,
    onInfoIconClick: (users: User[]) => void,
}

function UsersList(props: UsersListProps) {
    const actionCell = (user: User) => (
        <TableCell align="center">
            <InfoIcon className={props.classes.actionIcon} onClick={() => props.onInfoIconClick([user])} />
            <ChatIcon className={props.classes.actionIcon} onClick={() => props.onDialogIconClick([user])} />
        </TableCell>
    );

    const userRow = (user: User) => (
      <TableRow key={user.id}>
          <TableCell align="center">
              <Avatar alt={user.firstName + ' ' + user.lastName} src={user.avatarSrc}/>
          </TableCell>
          <TableCell align="left">
              {user.firstName + ' '
              + user.lastName + ' '
              + (!user.patronymic ? '' : user.patronymic)}
          </TableCell>
          {actionCell(user)}
      </TableRow>
    );

    return (
        <TableContainer component={Paper}>
            <Table className={props.classes.table}>
                <TableHead/>
                {props.users.map(userRow)}
            </Table>
        </TableContainer>
    );
}

export default withStyles(styles)(UsersList)