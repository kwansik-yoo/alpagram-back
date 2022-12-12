import { model } from 'mongoose';
//
import { ReadOffsetStore } from '../../chat/ReadOffsetStore';
import ODM from './_odm/readOffset';

const Repository = model(
    'ReadOffset',
    ODM.schema
);

const ChatMongoStore: ReadOffsetStore = {
    create: async data => {
        await new Repository({ ...data, _id: data.id }).save();
        return data.id;
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
    },
    createAll: async dataset => {
        await Repository.insertMany(dataset);
        return dataset.map(data => data.id);
    }
};

export default ChatMongoStore;
