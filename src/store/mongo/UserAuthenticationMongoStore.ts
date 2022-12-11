import { model, Schema } from 'mongoose';
//
import { UserAuthenticationStore } from '../UserAuthenticationStore';
import { UserAuthentication } from '../../types/user';

const Repository = model(
    'UserAuthentication',
    new Schema({
        _id: String,
        password: String
    },
    {
        collection: 'UserAuthentication'
    }
    ));

const toDomain = (m: any): UserAuthentication => {
    return {
        id: m._id,
        password: m.password
    };
};

const UserAuthenticationMongoStore: UserAuthenticationStore = {
    create: async data => {
        const { id, password } = data;
        await new Repository({ _id: id, password }).save();
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
        return toDomain(await Repository.findById(id));
    }
};

export default UserAuthenticationMongoStore;
