import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';
import {Dialog} from "../../../types/dialogs";
import {Badge} from "@material-ui/core";

interface Props {
    key: string,
    data: Dialog,
    onDialogClick: (dialogId: string) => void,
    selected: boolean,
}

export default function ConversationListItem(props: Props) {
    useEffect(() => {
        shave('.conversation-snippet', 20);
    });

    return (
        <div className="conversation-list-item" onClick={() => props.onDialogClick(props.data.id)}>
            <div className="conversation-info">
                <h1 className="conversation-title">{props.key}</h1>
                <Badge color="secondary" variant="dot" invisible={!props.selected}>
                    <p className="conversation-snippet">{props.data.name}</p>
                </Badge>
            </div>
        </div>
    );
}