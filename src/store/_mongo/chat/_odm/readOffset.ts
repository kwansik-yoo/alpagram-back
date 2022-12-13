import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { ReadOffset } from '../../../../types/chat';

const odm: Odm<ReadOffset> = {
    fromDoc: queryResult => queryResult === null
        ? null
        : ({
            id: queryResult._id,
            userId: queryResult.userId,
            roomId: queryResult.roomId,
            offset: queryResult.offset
        }),
    toDoc: readOffset => {
        const { id, userId, roomId, offset } = readOffset;
        return {
            _id: id,
            userId,
            roomId,
            offset
        };
    },
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
