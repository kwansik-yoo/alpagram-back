import path from 'path';
import { readFileSync, writeFileSync } from 'fs';

const genPath = (key: string): string => [__dirname, 'storage', key.concat('.json')].join(path.sep);

export const load = async <T> (key: string): Promise<T[]> => {
    try {
        const file = await readFileSync(genPath(key));
        return await Promise.resolve(JSON.parse(file.toString()));
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const save = async (key: string, dataset: any[]): Promise<void> => {
    const json = JSON.stringify(dataset);
    const buffer = Buffer.from(json);
    await writeFileSync(genPath(key), buffer);
};
