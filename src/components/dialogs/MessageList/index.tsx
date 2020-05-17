import React from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';

import './MessageList.css';
import {DialogMessage} from "../../../types/dialogs";
import {getUserId} from "../../../actions/authentication";

interface Props {
    messages: DialogMessage[],
}

export default function MessageList(props: Props) {
    const MY_USER_ID = getUserId();

    const renderMessages = () => {
        let i = 0;
        let messageCount = props.messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = props.messages[i - 1];
            let current = props.messages[i];
            let next = props.messages[i + 1];
            let isMine = current.sender.id === MY_USER_ID;
            let currentMoment = moment(current.createdTs);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = moment(previous.createdTs);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.sender.id === current.sender.id;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.createdTs);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.sender.id === current.sender.id;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(
                <Message
                    key={i}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                />
            );

            // Proceed to the next message.
            i += 1;
        }

        return tempMessages;
    };

    return (
        <div className="message-list">
            <Toolbar
                title=""
                rightItems={[
                    <ToolbarButton key="info" icon="ion-ios-information-circle-outline"/>,
                    <ToolbarButton key="video" icon="ion-ios-videocam"/>,
                    <ToolbarButton key="phone" icon="ion-ios-call"/>
                ]}
            />

            <div className="message-list-container">{renderMessages()}</div>

            <Compose rightItems={[
                <ToolbarButton key="photo" icon="ion-ios-camera"/>,
                <ToolbarButton key="image" icon="ion-ios-image"/>,
                <ToolbarButton key="audio" icon="ion-ios-mic"/>,
                <ToolbarButton key="money" icon="ion-ios-card"/>,
                <ToolbarButton key="games" icon="ion-logo-game-controller-b"/>,
                <ToolbarButton key="emoji" icon="ion-ios-happy"/>
            ]}/>
        </div>
    );
}