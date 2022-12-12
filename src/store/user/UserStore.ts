import { User } from '../../types/user';
import { BaseStore } from '../BaseStore';

export interface UserStore extends BaseStore<User> {
}

export { default as Disk } from '../_disk/user/UserDiskStore';
export { default as Mongo } from '../_mongo/user/UserMongoStore';
