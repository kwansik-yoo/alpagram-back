import path from 'path';
import { readFileSync, writeFileSync } from 'fs';

export const load = async <T> (key: string): Promise<T[]> => {
    const PATH = [__dirname, 'storage', key.concat('.json')].join(path.sep);
    try {
        const file = await readFileSync(PATH);
        return await Promise.resolve(JSON.parse(file.toString()));
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const save = async (key: string, dataset: any[]): Promise<void> => {
    const PATH = __dirname.concat('/', key, '.json');
    const json = JSON.stringify(dataset);
    const buffer = Buffer.from(json);
    await writeFileSync(PATH, buffer);
};
