import React from 'react';
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import ConversationList from "../../components/dialogs/ConversationList";
import MessageList from "../../components/dialogs/MessageList";
import './styles.css';
import {setDialogLoading, setDialogsLoading} from "../../actions/loadings";
import {changeReadStatusAction, getDialogsAction, getMessagesAction, sendMessageAction} from "../../actions/dialogs";
import {Dialog, DialogMessage} from "../../types/dialogs";
import PageLoader from "../../components/PageLoader";
import {getUserId} from "../../actions/authentication";

interface MapStateToProps {
    loading: {
        dialogs: boolean
    },
    dialogs: Dialog[],
    messages: DialogMessage[],
}

interface MapDispatchToProps {
    setDialogsLoading: (loading: boolean) => void,
    getDialogsAction: (userId: string) => void,
    getMessagesAction: (dialogId: string) => void,
    changeReadStatus: (dialogId: string, status: boolean, exclude: string) => void,
    sendMessageAction: (senderId: string, receiverId: string, content: string) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {
    dialogId?: string,
}

class Dialogs extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            dialogId: undefined,
        };
        this.onSearch = this.onSearch.bind(this);
        this.onDialogClick = this.onDialogClick.bind(this);
    }

    UNSAFE_componentWillMount(): void {
        this.props.setDialogsLoading(true);
        this.props.getDialogsAction(getUserId());
    }

    private onSearch(value: string) {}

    private onDialogClick(dialogId: string) {
        this.setState({
            ...this.state,
            dialogId,
        }, () => {
            this.props.getMessagesAction(dialogId);
            this.props.changeReadStatus(dialogId, true, getUserId());
        });
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('Did update');
        this.props.changeReadStatus(this.state.dialogId!, true, getUserId());
    }

    render() {
        if(this.props.loading.dialogs) return <PageLoader />;
        return (
            <div className="messenger">
                <div className="scrollable sidebar">
                    <ConversationList
                        onDialogClick={this.onDialogClick}
                        conversations={this.props.dialogs}
                    />
                </div>

                <div className="scrollable content">
                    <MessageList messages={this.props.messages}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    loading: {
        dialogs: state.loadingState.dialogs,
    },
    dialogs: state.dialogsState.dialogs,
    messages: state.dialogsState.messages,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    setDialogsLoading: (loading: boolean) => dispatch(setDialogsLoading(loading)),
    getDialogsAction: (userId: string) => dispatch(getDialogsAction(userId)),
    getMessagesAction: (dialogId: string) => dispatch(getMessagesAction(dialogId)),
    changeReadStatus: (dialogId: string, status: boolean, exclude: string) => dispatch(changeReadStatusAction(dialogId, status, exclude)),
    sendMessageAction: (senderId: string, receiverId: string, content: string) =>
        dispatch(sendMessageAction(senderId, receiverId, content))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
