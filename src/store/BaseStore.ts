import { ClientSession } from 'mongoose';

export interface BaseStore<T> {
    create: (t: T, session?: ClientSession) => Promise<string>;
    update: (id: string, t: T, session?: ClientSession) => Promise<string>;
    delete: (id: string, session?: ClientSession) => Promise<string>;
    findById: (id: string, session?: ClientSession) => Promise<T | null>;
}
