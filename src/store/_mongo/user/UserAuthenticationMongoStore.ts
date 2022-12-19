import { model } from 'mongoose';
//
import { UserAuthenticationStore } from '../../user/UserAuthenticationStore';
import ODM from './_odm/userAuthentication';

const Repository = model(
    'UserAuthentication',
    ODM.schema
);

const UserAuthenticationMongoStore: UserAuthenticationStore = {
    create: async (data, session) => {
        if (data.password === 'error') {
            throw new Error('password is error');
        }
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

export default UserAuthenticationMongoStore;
