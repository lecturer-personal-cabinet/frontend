import React from 'react';
import styles from "./styles";
import {withStyles, WithStyles} from "@material-ui/core";
import PersonsList from "../../components/UsersList";
import ListActionBar from "../../components/ListActionBar";
import SendMessageDialog from "../../components/SendMessageDialog";
import {connect} from 'react-redux';
import {RootState} from "../../store";
import {User} from "../../types/users";
import {ThunkDispatch} from "redux-thunk";
import {getAllUsers} from "../../actions/users";
import PageLoader from "../../components/PageLoader";
import {setUsersListLoading} from "../../actions/loadings";
import {setSendMessageDialogState} from "../../actions/dialogs";
import {WebSocketController} from "../../actions/websocket";

interface CustomProps {
    isAuthenticated: boolean,
}

interface StateToProps extends WithStyles<typeof styles> {
    users: User[],
    isLoaderEnabled: boolean,
    dialogs: {
        sendMessageDialog: boolean,
    },
}

interface DispatchToProps {
    getAllUsers: (search?: string) => void,
    setUsersListLoading: (loading: boolean) => void,
    setSendMessageDialogState: (open: boolean) => void,
}

type Props = StateToProps & DispatchToProps & CustomProps;

interface State {
    selectedUsers: User[],
}

class UsersContainer extends React.Component<Props, State> {
    UNSAFE_componentWillMount() {
        this.props.setSendMessageDialogState(false);
        this.props.setUsersListLoading(true);
        this.props.getAllUsers();
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            selectedUsers: [],
        };

        this.onDialogIconClick = this.onDialogIconClick.bind(this);
        this.onInfoIconClick = this.onInfoIconClick.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    private onDialogIconClick(users: User[]) {
        this.setState({
            ...this.state,
            selectedUsers: users,
        }, () => this.props.setSendMessageDialogState(!this.props.dialogs.sendMessageDialog));
    }

    private onSearch(value: string) {
        this.props.getAllUsers(value);
    }

    private onSendClick (receivers: User[], message: string) {
        WebSocketController.sendMessage(
            localStorage.getItem('userId') || '',
            receivers.map(r => r.id!),
            message)
    }

    private onInfoIconClick(users: User[]) {}

    render() {
        if(this.props.isLoaderEnabled) return <PageLoader />;
        return (
            <div className={this.props.classes.root}>
                <SendMessageDialog openDialog={this.props.dialogs.sendMessageDialog}
                                   onDialogClose={this.onDialogIconClick}
                                   contacts={this.props.users}
                                   selectedUsers={this.state.selectedUsers}
                                   onSendClick={this.onSendClick}
                />

                <div className={this.props.classes.actionBar}>
                    <ListActionBar
                        onSearch={this.onSearch}
                    />
                </div>
                <PersonsList users={this.props.users.filter(u => u.id !== localStorage.getItem('userId'))}
                             onDialogIconClick={this.onDialogIconClick}
                             onInfoIconClick={this.onInfoIconClick}
                             withSendMessage={this.props.isAuthenticated}
                             withInformation={false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    users: state.userState.users,
    isLoaderEnabled: state.loadingState.usersList,
    dialogs: {
        sendMessageDialog: state.dialogsState.sendMessageDialogStatus,
    },
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getAllUsers: (search?: string) => dispatch(getAllUsers(search)),
    setUsersListLoading: (loading: boolean) => dispatch(setUsersListLoading(loading)),
    setSendMessageDialogState: (open: boolean) => dispatch(setSendMessageDialogState(open)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))