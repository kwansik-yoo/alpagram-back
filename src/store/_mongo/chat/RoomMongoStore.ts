import { model } from 'mongoose';
//
import { RoomStore } from '../../chat/RoomStore';
import ODM from './_odm/room';

const Repository = model(
    'Room',
    ODM.schema
);

const ChatMongoStore: RoomStore = {
    create: async data => {
        await new Repository(ODM.toDoc(data)).save();
        return data.id;
    },
    update: async (id, t) => {
        const isExists = await Repository.exists({ _id: id });
        if (isExists != null) {
            await Repository.update({ _id: id }, ODM.toDoc(t));
        }
        return id;
    },
    delete: async id => {
        await Repository.deleteOne({ _id: id });
        return id;
    },
    findById: async id => {
        return ODM.fromDoc(await Repository.findById(id));
    }
};

export default ChatMongoStore;
