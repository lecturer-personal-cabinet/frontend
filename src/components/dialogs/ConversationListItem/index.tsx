import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';
import {Dialog} from "../../../types/dialogs";

interface Props {
    key: string,
    data: Dialog,
    onDialogClick: (dialogId: string) => void,
}

export default function ConversationListItem(props: Props) {
    useEffect(() => {
        shave('.conversation-snippet', 20);
    });

    // const { photo, name, text } = props.data;

    return (
        <div className="conversation-list-item" onClick={() => props.onDialogClick(props.data.id)}>
            {/*<img className="conversation-photo" src={props.data.participants} alt="conversation" />*/}
            <div className="conversation-info">
                <h1 className="conversation-title">{props.key}</h1>
                <p className="conversation-snippet">{props.data.name}</p>
            </div>
        </div>
    );
}