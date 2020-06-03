import React from 'react';
import Toolbar from '../Toolbar';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';
import {DialogMessage} from "../../../types/dialogs";
import {getUserId} from "../../../actions/authentication";
import {Button, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

interface Props {
    messages: DialogMessage[],
    onNewMessage: (message: string) => void,
}

export default function MessageList(props: Props) {
    const [message, setMessage] = React.useState('');
    const MY_USER_ID = getUserId();

    const handleSendMessage = () => {
        if (message.length > 0) {
            setMessage('');
            props.onNewMessage(message);
        }
    };

    const renderMessages = () => {
        return props.messages
            .sort((a: DialogMessage, b: DialogMessage) => {
                if (a.createdTs > b.createdTs) {
                    return 1;
                } else if (a.createdTs < b.createdTs) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .map((m, index) => {
                return (<Message
                    key={index}
                    isMine={m.sender.id === MY_USER_ID}
                    startsSequence={false}
                    endsSequence={false}
                    showTimestamp={false}
                    data={m}
                />)
            });
    };

    return (
        <div className="message-list">
            <Toolbar
                title=""
                rightItems={[]}
            />

            <div className="message-list-container">
                {renderMessages()}
                <Grid
                    container
                    spacing={2}
                    // direction="column"
                    alignItems="center"
                    justify="center"
                    style={{
                        position: 'fixed',
                        width: 'calc(100% - 20px)',
                        bottom: '0px',
                    }}>
                    <Grid item xs={8}>
                        <TextField
                            style={{height: '40px'}}
                            autoFocus
                            margin="dense"
                            label="Сообщение"
                            type="text"
                            fullWidth
                            variant="outlined"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    handleSendMessage()
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            style={{height: '40px'}}
                            variant="contained"
                            color="primary"
                            onClick={() => handleSendMessage()}
                        >
                            Отправить
                        </Button>
                    </Grid>
                </Grid>
                {/*<Compose rightItems={[]} onSubmit={props.onNewMessage}/>*/}
            </div>
        </div>
    );
}