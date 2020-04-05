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

interface CustomProps {
    isAuthenticated: boolean,
}

interface StateToProps extends WithStyles<typeof styles> {
    users: User[],
    isLoaderEnabled: boolean,
}

interface DispatchToProps {
    getAllUsers: (search?: string) => void,
    setUsersListLoading: (loading: boolean) => void,
}

type Props = StateToProps & DispatchToProps & CustomProps;

interface State {
    openDialogWindow: boolean,
    selectedUsers: User[],
}

class UsersContainer extends React.Component<Props, State> {
    UNSAFE_componentWillMount() {
        this.props.setUsersListLoading(true);
        this.props.getAllUsers();
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            openDialogWindow: false,
            selectedUsers: [],
        };

        this.onDialogIconClick = this.onDialogIconClick.bind(this);
        this.onInfoIconClick = this.onInfoIconClick.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    private onDialogIconClick(users: User[]) {
        this.setState({
            ...this.state,
            openDialogWindow: !this.state.openDialogWindow,
            selectedUsers: users,
        })
    }

    private onSearch(value: string) {
        this.props.getAllUsers(value);
    }

    private onInfoIconClick(users: User[]) {}

    render() {
        if(this.props.isLoaderEnabled) return <PageLoader />;
        return (
            <div className={this.props.classes.root}>
                <SendMessageDialog openDialog={this.state.openDialogWindow}
                                   onDialogClose={this.onDialogIconClick}
                                   contacts={this.props.users}
                                   selectedUsers={this.state.selectedUsers}/>

                <div className={this.props.classes.actionBar}>
                    <ListActionBar
                        onSearch={this.onSearch}
                    />
                </div>
                <PersonsList users={this.props.users}
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
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getAllUsers: (search?: string) => dispatch(getAllUsers(search)),
    setUsersListLoading: (loading: boolean) => dispatch(setUsersListLoading(loading)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UsersContainer))