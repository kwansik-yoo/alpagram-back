import * as UserAuthenticateStore from './user/UserAuthenticationStore';
import * as UserStore from './user/UserStore';
import * as ChatSore from './chat/ChatStore';
import * as RoomStore from './chat/RoomStore';
import * as ReadOffsetStore from './chat/ReadOffsetStore';
//
import mongoConfiguration from './_mongo/configuration';

export default {
    configuration: mongoConfiguration,
    UserAuthenticateStore: UserAuthenticateStore.Mongo,
    UserStore: UserStore.Mongo,
    ChatStore: ChatSore.Mongo,
    RoomStore: RoomStore.Mongo,
    ReadOffsetStore: ReadOffsetStore.Mongo
};
