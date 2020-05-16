import {showNotification} from "./notifications";
import {ThunkDispatch} from "redux-thunk";
import {addNewMessage, increaseUnreadMessagesCount, setUnreadMessagesCount} from "./dialogs";
import {getUserId} from "./authentication";

export class WebSocketController {
    private static ws: WebSocket;
    static dispatch: ThunkDispatch<{}, {}, any>;

    public static run() {
        WebSocketController.connect();
    }

    private static connect() {
        const ws = new WebSocket(`${process.env.REACT_APP_MESSAGE_SERVICE_HOST!}/${getUserId()}`);
        ws.onopen = function() {

        };
        ws.onmessage = function(e) {
            WebSocketController.handleIncomingEvents(JSON.parse(e.data));
        };

        ws.onclose = function(e) {
            console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
            setTimeout(function() {
                WebSocketController.connect();
            }, 1000);
        };

        ws.onerror = function(err) {
            console.error('Socket encountered error: ', err, 'Closing socket');
            ws.close();
        };
    }

    private static handleIncomingEvents(eventData: any) {
        switch(eventData['eventType']) {
            case 'notification-event':
                this.dispatch(showNotification(eventData['content']));
                break;
            case 'message-sent':
                this.dispatch(showNotification('Cообщение успешно отправлено'));
                break;
            case 'metrics-event':
                this.dispatch(setUnreadMessagesCount(eventData['unreadMessagesCount']));
                break;
            case 'message-received':
                this.dispatch(increaseUnreadMessagesCount(1));
                this.dispatch(addNewMessage(eventData.message));
                this.dispatch(showNotification('Получено новое сообщение'));
                break;
            default: {}
        }
    }

    static sendMessage(userId: string, receivers: string[], content: string) {
        const request = {
            userId,
            'eventType': 'send-message-event',
            'data': {userId, receivers, content},
        };

        try {
            WebSocketController.ws.send(JSON.stringify(request));
        } catch(e) {
            console.log(e);
        }
    }
}
