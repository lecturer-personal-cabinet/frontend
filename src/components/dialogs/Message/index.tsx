import React from 'react';
import moment from 'moment';
import './Message.css';
import {DialogMessage} from "../../../types/dialogs";

interface Props {
    data: DialogMessage,
    isMine: boolean,
    startsSequence: boolean,
    endsSequence: boolean,
    showTimestamp: boolean
}

export default function Message(props: Props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;

    const friendlyTimestamp = moment(data.createdTs).format('LLLL');
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.content }
          </div>
        </div>
      </div>
    );
}