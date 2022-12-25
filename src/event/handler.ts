import EventProxy from './EventProxy';
import {
    ChatSendEvent
} from './types';
import ChatLogic from '../logic/ChatLogic';

const onChatSendEvent = async (payload: ChatSendEvent['payload']): Promise<void> => {
    const { roomId } = payload;
    void ChatLogic.addRoomOffset(roomId);
};

const subscribe = (): void => {
    EventProxy.subscribe('ChatSendEvent', onChatSendEvent);
};

export default subscribe;
