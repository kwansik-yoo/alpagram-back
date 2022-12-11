import { UserAuthentication } from '../types/user';
import { BaseStore } from './BaseStore';

export interface UserAuthenticationStore extends BaseStore<UserAuthentication> {}

export { default as Disk } from './disk/UserAuthenticationDiskStore';
export { default as Mongo } from './mongo/UserAuthenticationMongoStore';
