import * as UserAuthenticateStore from './UserAuthenticateStore';
import * as UserStore from './UserStore';

export default {
    UserAuthenticateStore: UserAuthenticateStore.Disk,
    UserStore: UserStore.Disk
};
