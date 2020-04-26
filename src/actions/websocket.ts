import {showNotification} from "./notifications";
import {ThunkDispatch} from "redux-thunk";
import {addNewMessage, setMessage} from "./dialogs";

export class WebSocketController {
    private static ws = new WebSocket(process.env.REACT_APP_MESSAGE_SERVICE_HOST!);
    private static dispatch: ThunkDispatch<{}, {}, any>;

    constructor(dispatch: ThunkDispatch<{}, {}, any>) {
        WebSocketController.dispatch = dispatch;
        if (WebSocketController.ws === null)
            WebSocketController.ws = new WebSocket(process.env.REACT_APP_MESSAGE_SERVICE_HOST!);
        // @ts-ignore
        WebSocketController.ws.onopen = () => {
            console.log('on open');
            setTimeout(() => WebSocketController.sendJoinChannelEvent(localStorage.getItem('userId')!), 1000);
        };

        WebSocketController.ws.onclose = () => {
            console.log('close');
            setTimeout(() => WebSocketController.ws = new WebSocket(process.env.REACT_APP_MESSAGE_SERVICE_HOST!), 1000);
        };

        WebSocketController.ws.onmessage = (message) => {
            console.log('On message');
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

    private static handleIncomingEvents(eventData: any) {
        switch(eventData['eventType']) {
            case 'notification-event':
                this.dispatch(showNotification(eventData['content']));
                break;
            case 'message-sent':
                this.dispatch(showNotification('Cообщение успешно отправлено'));
                break;
            case 'message-received':
                console.log(eventData.message);
                this.dispatch(addNewMessage(eventData.message));
                this.dispatch(showNotification('Получено новое сообщение'));
                break;
            default: {}
        }
    }

    static sendMessage(userId: string, receivers: string[], content: string) {
        console.log(`Send message: ${userId}, receivers: ${receivers}, content: ${content}`);
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
