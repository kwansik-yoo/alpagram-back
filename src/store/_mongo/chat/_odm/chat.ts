import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { Chat } from '../../../../types/chat';

const odm: Odm<Chat> = {
    mapper: queryResult => queryResult ?? ({
        id: queryResult._id,
        regTime: queryResult.regTime,
        modTime: queryResult.modTime,
        writer: {
            id: queryResult.writerId,
            name: queryResult.writerId
        },
        message: queryResult.message,
        roomId: queryResult.roomId
    }),
    schema: new Schema({
        _id: String,
        regTime: Number,
        modTime: Number,
        writerId: String,
        message: String,
        roomId: String
    }, {
        collection: 'Chat'
    })
};

export default odm;
