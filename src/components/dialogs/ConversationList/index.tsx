import React from 'react';
import ConversationSearch from '../ConversationSearch';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import './ConversationList.css';
import {Dialog} from "../../../types/dialogs";
import ConversationListItem from "../ConversationListItem";

interface Props {
    conversations: Dialog[],
    onDialogClick: (dialogId: string) => void,
    selected?: string,
}

export default function ConversationList(props: Props) {
    return (
        <div className="conversation-list">
            <Toolbar
                title=""
                leftItems={[
                    <ToolbarButton key="cog" icon="ion-ios-cog"/>
                ]}
                rightItems={[
                    <ToolbarButton key="add" icon="ion-ios-add-circle-outline"/>
                ]}
            />
            <ConversationSearch/>
            {
                props.conversations.map(conversation =>
                    <ConversationListItem
                        onDialogClick={props.onDialogClick}
                        key={conversation.name}
                        data={conversation}
                        selected={conversation.id == props.selected}
                    />
                )
            }
        </div>
    );
}