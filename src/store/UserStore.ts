import { User } from '../types/user';
import { BaseStore } from './BaseStore';

export interface UserStore extends BaseStore<User> {
}

export { default as Disk } from './disk/UserDiskStore';
export { default as Mongo } from './mongo/UserMongoStore';
