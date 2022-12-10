import { UserAuthentication } from '../../types/user';
import { UserAuthenticateStore } from '../UserAuthenticateStore';
import { load, save } from './functions';

const DISK_KEY = 'UserAuthentication';

const UserAuthenticateDiskStore: UserAuthenticateStore = {
    create: async (data: UserAuthentication) => {
        const dataset = await load<UserAuthentication>(DISK_KEY);
        dataset.push(data);
        await save(DISK_KEY, dataset);
        return data.id;
    },
    update: async (id, data) => {
        const dataset = await load<UserAuthentication>(DISK_KEY);
        const targetIdx = dataset.findIndex(d => d.id === id);
        if (targetIdx > -1) {
            dataset[targetIdx] = data;
            await save(DISK_KEY, dataset);
        }
        return data.id;
    },
    delete: async (id) => {
        const dataset = await load<UserAuthentication>(DISK_KEY);
        const targetIdx = dataset.findIndex(d => d.id === id);
        if (targetIdx > -1) {
            dataset.splice(targetIdx);
            await save(DISK_KEY, dataset);
        }
        return id;
    },
    findById: async (id) => {
        const dataset = await load<UserAuthentication>(DISK_KEY);
        return dataset.find(d => d.id === id);
    }
};

export default UserAuthenticateDiskStore;
