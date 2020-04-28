import {showNotification} from "./notifications";
import {ThunkDispatch} from "redux-thunk";
import {addNewMessage, increaseUnreadMessagesCount, setUnreadMessagesCount} from "./dialogs";

export class WebSocketController {
    private static ws = new WebSocket(process.env.REACT_APP_MESSAGE_SERVICE_HOST!);
    private static dispatch: ThunkDispatch<{}, {}, any>;

    constructor(dispatch: ThunkDispatch<{}, {}, any>) {
        WebSocketController.dispatch = dispatch;
        if (WebSocketController.ws === null)
            WebSocketController.ws = new WebSocket(process.env.REACT_APP_MESSAGE_SERVICE_HOST!);
        // @ts-ignore
        WebSocketController.ws.onopen = () => {
            setTimeout(() => {
                WebSocketController.sendJoinChannelEvent(localStorage.getItem('userId')!);
                WebSocketController.sendMetricsEventRequest(localStorage.getItem('userId')!);
            }, 1000);

            setInterval(() => {
                WebSocketController.sendMetricsEventRequest(localStorage.getItem('userId')!)
            }, 5000);
        };

        WebSocketController.ws.onclose = () => {
            setTimeout(() => WebSocketController.ws = new WebSocket(process.env.REACT_APP_MESSAGE_SERVICE_HOST!), 1000);
        };

        WebSocketController.ws.onmessage = (message) => {
            WebSocketController.handleIncomingEvents(JSON.parse(message.data));
        };

        WebSocketController.ws.onerror = (e) => {
          console.log('Error: ' + JSON.stringify(e));
        };
    };

    private static sendJoinChannelEvent(userId: string) {
        const request = {
            userId,
            'eventType': 'join-event',
            'data': {userId},
        };

        try {
            WebSocketController.ws.send(JSON.stringify(request));
        } catch(e) {
            console.log(e);
        }
    }

    private static sendMetricsEventRequest(userId: string) {
        const request = {
            userId,
            'eventType': 'metrics-event-request',
            'data': {userId},
        };

        try {
            WebSocketController.ws.send(JSON.stringify(request));
        } catch(e) {
            console.log(e);
        }
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
