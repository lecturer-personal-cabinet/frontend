import React from 'react';
import {
    Box, Paper,
    withStyles,
    WithStyles
} from "@material-ui/core";
import {RootState} from "../../store";
import {connect} from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import styles from "./styles";
import {ThunkDispatch} from "redux-thunk";
import MessageInput from "../../components/MessageInput";
import ChatList from "../../components/ChatList";
import {DialogMessage} from "../../types/dialogs";
import PageLoader from "../../components/PageLoader";
import {getMessagesAction} from "../../actions/dialogs";
import {setDialogLoading} from "../../actions/loadings";

interface MatchParams {
    dialogId: string,
}

interface MapStateToProps extends WithStyles<typeof styles>, RouteComponentProps<MatchParams> {
    loading: {
        dialog: boolean,
    },
    messages: DialogMessage[],
}

interface MapDispatchToProps {
    getMessagesAction: (dialogId: string) => void,
    setDialogLoading: (loading: boolean) => void,
}

type Props = MapStateToProps & MapDispatchToProps;

interface State {}

class MessageContainer extends React.Component<Props, State> {
    UNSAFE_componentWillMount(): void {
        this.props.setDialogLoading(true);
        this.props.getMessagesAction(this.props.match.params.dialogId);
    }

    render() {
        if(this.props.loading.dialog) return <PageLoader />;
        return (
            <Box className={this.props.classes.root}>
                <Paper className={this.props.classes.dialogWrapper}>
                    <Box width={"100%"} height={1}>
                        <Box width={"100%"} height={"90%"}>
                            <ChatList userId={localStorage.getItem('userId') || ''} messages={this.props.messages} />
                        </Box>
                        <Box width={"100%"} height={"10%"}>
                            <MessageInput
                                textFieldLabel={'Сообщение'}
                                buttonText={'Отправить'}
                            />
                        </Box>
                    </Box>
                </Paper>
            </Box>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    loading: {
        dialog: state.loadingState.dialog,
    },
    messages: state.dialogsState.messages,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    getMessagesAction: (dialogId: string) => dispatch(getMessagesAction(dialogId)),
    setDialogLoading: (loading: boolean) => dispatch(setDialogLoading(loading)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MessageContainer))
