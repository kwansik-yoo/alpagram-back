import * as UserAuthenticateStore from './UserAuthenticationStore';
import * as UserStore from './UserStore';
//
import mongoConfiguration from './mongo/configuration';

export default {
    configuration: mongoConfiguration,
    UserAuthenticateStore: UserAuthenticateStore.Mongo,
    UserStore: UserStore.Mongo
};
