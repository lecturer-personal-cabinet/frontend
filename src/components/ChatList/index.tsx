import React from 'react';
import {
    WithStyles,
    withStyles
} from "@material-ui/core";
import styles from "./styles";
import Message from "../Message";
import {DialogMessage} from "../../types/dialogs";

interface Props extends WithStyles<typeof styles> {
    messages: DialogMessage[],
    userId: string,
}

function ChatList(props: Props) {
    return (
        <div className={props.classes.listWrapper}>
            {props.messages.map(message => (
                <div className={props.classes.messageWrapper}>
                    <Message
                        message={message.content}
                        isOwnMessage={message.sender.id === props.userId}
                        isRead={message.isRead}
                    />
                </div>
            ))}
        </div>
    )
}

export default withStyles(styles)(ChatList);