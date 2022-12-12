export interface BaseStore<T> {
    create: (t: T) => Promise<string>;
    update: (id: string, t: T) => Promise<string>;
    delete: (id: string) => Promise<string>;
    findById: (id: string) => Promise<T | null>;
}
