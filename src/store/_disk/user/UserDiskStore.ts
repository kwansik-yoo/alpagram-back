import { User } from '../../../types/user';
import { load, save } from '../functions';
import { UserStore } from '../../user/UserStore';

const DISK_KEY = 'User';

const UserDiskStore: UserStore = {
    create: async (data) => {
        const dataset = await load<User>(DISK_KEY);
        dataset.push(data);
        await save(DISK_KEY, dataset);
        return data.id;
    },
    update: async (id, data) => {
        const dataset = await load<User>(DISK_KEY);
        const targetIdx = dataset.findIndex(d => d.id === id);
        if (targetIdx > -1) {
            dataset[targetIdx] = data;
            await save(DISK_KEY, dataset);
        }
        return data.id;
    },
    delete: async (id) => {
        const dataset = await load<User>(DISK_KEY);
        const targetIdx = dataset.findIndex(d => d.id === id);
        if (targetIdx > -1) {
            dataset.splice(targetIdx);
            await save(DISK_KEY, dataset);
        }
        return id;
    },
    findById: async (id) => {
        const dataset = await load<User>(DISK_KEY);
        const target = dataset.find(d => d.id === id);
        return (target != null) ? target : null;
    }
};

export default UserDiskStore;
