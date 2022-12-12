import { Schema } from 'mongoose';

export type OdmMapper<T> = (queryResult: any | null) => T | null;

export interface Odm<T> {
    mapper: OdmMapper<T>;
    schema: Schema;
}
