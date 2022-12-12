import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { DirectChatRoom, GroupChatRoom, Room } from '../../../../types/chat';

const odm: Odm<DirectChatRoom | GroupChatRoom> = {
    mapper: queryResult => {
        if (queryResult === null) {
            return null;
        }
        const room = {
            id: queryResult._id,
            offset: queryResult.offset
        };
        if (queryResult.type === 'direct') {
            return {
                ...room,
                type: 'direct',
                elice: {
                    id: queryResult.directMeta.eliceId,
                    name: ''
                },
                bob: {
                    id: queryResult.directMeta.bobId,
                    name: ''
                }
            };
        } else {
            return {
                ...room,
                type: 'group',
                owner: {
                    id: queryResult.groupMeta.ownerId,
                    name: queryResult.groupMeta.ownerId
                },
                admins: queryResult.groupMeta.adminIds.map(id => ({ id, name: id })),
                members: queryResult.groupMeta.members.map(id => ({ id, name: id }))
            };
        }
    },
    schema: new Schema({
        _id: String,
        offset: Number,
        type: ['direct', 'group'],
        directMeta: {
            eliceId: String,
            bobId: String
        },
        groupMeta: {
            ownerId: String,
            adminIds: [String],
            members: [String]
        }
    }, {
        collection: 'Room'
    })
};

export default odm;
