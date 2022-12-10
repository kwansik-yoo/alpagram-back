import { UserAuthentication } from '../types/user';
import { BaseStore } from './BaseStore';

export interface UserAuthenticateStore extends BaseStore<UserAuthentication> {}

export { default as Disk } from './disk/UserAuthenticateDiskStore';
