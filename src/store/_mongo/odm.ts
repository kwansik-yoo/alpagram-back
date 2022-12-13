import { Schema } from 'mongoose';

export type FromDoc<T> = (queryResult: any | null) => T | null;
export type ToDoc<T> = (domain: T) => any;

export interface Odm<T> {
    fromDoc: FromDoc<T>;
    toDoc: ToDoc<T>;
    schema: Schema;
}
