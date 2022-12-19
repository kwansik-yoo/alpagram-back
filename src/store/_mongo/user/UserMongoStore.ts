import { model } from 'mongoose';
//
import { UserStore } from '../../user/UserStore';
import ODM from './_odm/user';

const Repository = model(
    'User',
    ODM.schema
);

const UserMongoStore: UserStore = {
    create: async (data, session) => {
        await Repository.create([ODM.toDoc(data)], { session });
        return data.id;
    },
    update: async (id, t, session) => {
        const isExists = await Repository.exists({ _id: id }).session(session ?? null);
        if (isExists != null) {
            await Repository.update({ _id: id }, ODM.toDoc(t), { session });
        }
        return id;
    },
    delete: async (id, session) => {
        await Repository.deleteOne({ _id: id }, { session });
        return id;
    },
    findById: async id => {
        return ODM.fromDoc(await Repository.findById(id));
    }
};

export default UserMongoStore;
