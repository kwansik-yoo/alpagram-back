import { model } from 'mongoose';
//
import { ChatStore } from '../../chat/ChatStore';
import ODM from './_odm/chat';

const Repository = model(
    'Chat',
    ODM.schema
);

const ChatMongoStore: ChatStore = {
    create: async data => {
        const { id, regTime, modTime, writer, message, roomId } = data;
        await new Repository({ _id: id, regTime, modTime, writer, message, roomId }).save();
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

export default ChatMongoStore;
