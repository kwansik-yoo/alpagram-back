import { BaseStore } from '../BaseStore';
import { GenericRoom } from '../../types/chat';

export interface RoomStore extends BaseStore<GenericRoom> {
}

export { default as Mongo } from '../_mongo/chat/RoomMongoStore';
