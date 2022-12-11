import { model, Schema } from 'mongoose';
//
import { UserStore } from '../UserStore';
import { User } from '../../types/user';

const Repository = model(
    'User',
    new Schema({
        _id: String,
        name: String
    },
    {
        collection: 'User'
    }
    ));

const toDomain = (m: any): User => {
    return {
        id: m._id,
        name: m.name
    };
};

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
        const origin = await Repository.findById(id);
        return toDomain(origin);
    }
};

export default UserMongoStore;
