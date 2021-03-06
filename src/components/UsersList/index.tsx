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
import {User} from "../../types/users";
import {redirectToPublicProfile} from "../../actions/redirects";

interface UsersListProps extends WithStyles<typeof styles> {
    users: User[],
    onDialogIconClick: (users: User[]) => void,
    onInfoIconClick: (users: User[]) => void,
    withSendMessage: boolean,
    withInformation: boolean
}

function UsersList(props: UsersListProps) {
    const actionCell = (user: User) => (
        <TableCell align="center">
            {props.withInformation && <InfoIcon className={props.classes.actionIcon} onClick={() => props.onInfoIconClick([user])} />}
            {props.withSendMessage && <ChatIcon className={props.classes.actionIcon} onClick={() => props.onDialogIconClick([user])} />}
        </TableCell>
    );

    const userRow = (user: User) => (
      <TableRow key={user.id} style={{cursor: 'pointer'}} onClick={() => onUserRowClick(user)}>
          <TableCell align="center">
              <Avatar alt={user.firstName + ' ' + user.lastName} src={user.image}/>
          </TableCell>
          <TableCell align="left">
              {user.firstName + ' ' + user.lastName}
          </TableCell>
          {/*{actionCell(user)}*/}
      </TableRow>
    );

    const onUserRowClick = (user: User) => redirectToPublicProfile(user.id || '');

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
