import { model } from 'mongoose';
//
import { UserAuthenticationStore } from '../../user/UserAuthenticationStore';
import ODM from './_odm/userAuthentication';

const Repository = model(
    'UserAuthentication',
    ODM.schema
);

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
        return ODM.mapper(await Repository.findById(id));
    }
};

export default UserAuthenticationMongoStore;
