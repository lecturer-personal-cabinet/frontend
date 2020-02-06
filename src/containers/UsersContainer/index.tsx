import React from 'react';
import styles from "./styles";
import {withStyles, WithStyles} from "@material-ui/core";
import PersonsList from "../../components/UsersList";
import ListActionBar from "../../components/ListActionBar";
import SendMessageDialog from "../../components/SendMessageDialog";
import {connect} from 'react-redux';
import {RootState} from "../../store";
import {User} from "../../store/users/types";

interface UsersContainerProps extends WithStyles<typeof styles> {
    users: User[],
}

interface UsersContainerState {
    openDialogWindow: boolean,
    selectedUsers: User[],
}

class UsersContainer extends React.Component<UsersContainerProps, UsersContainerState> {
    constructor(props: UsersContainerProps) {
        super(props);
        this.state = {
            openDialogWindow: false,
            selectedUsers: [],
        };

        this.onDialogIconClick = this.onDialogIconClick.bind(this);
        this.onInfoIconClick = this.onInfoIconClick.bind(this);
    }

    private onDialogIconClick (users: User[]) {
        this.setState({
            ...this.state,
            openDialogWindow: !this.state.openDialogWindow,
            selectedUsers: users,
        })
    }

    private onInfoIconClick (users: User[]) {

    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <SendMessageDialog openDialog={this.state.openDialogWindow}
                                   onDialogClose={this.onDialogIconClick}
                                   contacts={this.props.users}
                                   selectedUsers={this.state.selectedUsers}/>

                <div className={this.props.classes.actionBar}>
                    <ListActionBar />
                </div>
                <PersonsList users={this.props.users}
                             onDialogIconClick={this.onDialogIconClick}
                             onInfoIconClick={this.onInfoIconClick} />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    users: state.userState.users,
});

export default withStyles(styles)(connect(mapStateToProps)(UsersContainer))