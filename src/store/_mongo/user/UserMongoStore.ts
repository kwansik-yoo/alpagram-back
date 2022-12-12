import { model } from 'mongoose';
//
import { UserStore } from '../../user/UserStore';
import ODM from './_odm/user';

const Repository = model(
    'User',
    ODM.schema
);

const UserMongoStore: UserStore = {
    create: async data => {
        const { id, name } = data;
        await new Repository({ _id: id, name }).save();
        return id;
    },
    update: async (id, t) => {
        const isExists = await Repository.exists({ _id: id });
        if (isExists != null) {
            await Repository.update({ _id: id }, t);
        }
        return id;
    },
    delete: async id => {
        await Repository.deleteOne({ _id: id });
        return id;
    },
    findById: async id => {
        return ODM.mapper(await Repository.findById(id));
    }
};

export default UserMongoStore;
