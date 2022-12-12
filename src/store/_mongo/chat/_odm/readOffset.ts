import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { ReadOffset } from '../../../../types/chat';

const odm: Odm<ReadOffset> = {
    mapper: queryResult => queryResult ?? ({
        id: queryResult._id,
        userId: queryResult.userId,
        roomId: queryResult.roomId,
        offset: queryResult.offset
    }),
    schema: new Schema({
        _id: String,
        userId: String,
        roomId: String,
        offset: Number
    }, {
        collection: 'ReadOffset'
    })
};

export default odm;
