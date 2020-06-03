import React from 'react';
import {RootState} from "../../store";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import ConversationList from "../../components/dialogs/ConversationList";
import MessageList from "../../components/dialogs/MessageList";
import './styles.css';
import {setDialogsLoading} from "../../actions/loadings";
import {
    changeReadStatusAction,
    getDialogsAction,
    getMessagesAction,
    sendMessageAndUpdateAction
} from "../../actions/dialogs";
import {Dialog, DialogMessage} from "../../types/dialogs";
import PageLoader from "../../components/PageLoader";
import {getUserId} from "../../actions/authentication";
import {showError} from "../../actions/notifications";
import { animateScroll } from "react-scroll";

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
    sendMessageAction: (senderId: string, receiverId: string, content: string, dialogId: string) => void,
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

    componentDidMount () {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('Did update');
        this.scrollToBottom();
        // this.props.changeReadStatus(this.state.dialogId!, true, getUserId());
        // this.props.getMessagesAction(this.state.dialogId!);
    }

    private onMessageSend = (message: string) => {
        try {
            const dialogId = this.state.dialogId;
            const participants = this.props.dialogs.find(e => e.id == dialogId)!.participants || [];
            const receiverId = participants.filter(e => e.user.id !== getUserId())[0];
            if(receiverId && receiverId.user.id) {
                this.props.sendMessageAction(getUserId(), receiverId.user.id!, message, dialogId!);
                this.props.changeReadStatus(this.state.dialogId!, true, getUserId());
            }
        } catch (e) {
            console.error(e);
            showError('Ошибка отправки сообщения');
        }
    };

    private scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "messages-container"
        });
    }

    render() {
        if(this.props.loading.dialogs) return <PageLoader />;
        return (
            <div className="messenger">
                <div className="scrollable sidebar">
                    <ConversationList
                        selected={this.state.dialogId}
                        onDialogClick={this.onDialogClick}
                        conversations={this.props.dialogs}
                    />
                </div>

                {this.state.dialogId &&
                    <div className="scrollable content" id={"messages-container"}>
                      <MessageList messages={this.props.messages} onNewMessage={this.onMessageSend}/>
                    </div>
                }
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
    sendMessageAction: (senderId: string, receiverId: string, content: string, dialogId: string) =>
        dispatch(sendMessageAndUpdateAction(senderId, receiverId, content, dialogId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
