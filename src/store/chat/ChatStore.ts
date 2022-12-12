import { BaseStore } from '../BaseStore';
import { Chat } from '../../types/chat';

export interface ChatStore extends BaseStore<Chat> {
}

export { default as Mongo } from '../_mongo/chat/ChatMongoStore';
