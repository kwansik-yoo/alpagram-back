import { BaseStore } from '../BaseStore';
import { ReadOffset } from '../../types/chat';

export interface ReadOffsetStore extends BaseStore<ReadOffset> {
    createAll: (offsetList: ReadOffset[]) => Promise<string[]>;
}

export { default as Mongo } from '../_mongo/chat/ReadOffsetMongoStore';
