import { UserAuthentication } from '../../types/user';
import { BaseStore } from '../BaseStore';

export interface UserAuthenticationStore extends BaseStore<UserAuthentication> {}

export { default as Disk } from '../_disk/user/UserAuthenticationDiskStore';
export { default as Mongo } from '../_mongo/user/UserAuthenticationMongoStore';
