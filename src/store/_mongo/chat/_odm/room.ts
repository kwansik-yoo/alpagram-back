import { Schema } from 'mongoose';
import { Odm } from '../../odm';
import { GenericRoom } from '../../../../types/chat';

const odm: Odm<GenericRoom> = {
    fromDoc: queryResult => {
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
    toDoc: room => {
        const doc = { _id: room.id, offset: room.offset, type: room.type };
        if (room.type === 'direct') {
            return {
                ...doc,
                directMeta: {
                    eliceId: room.elice.id,
                    bobId: room.bob.id
                }
            };
        } else {
            return {
                ...doc,
                groupMeta: {
                    ownerId: room.owner.id,
                    adminIds: room.admins.map(admin => admin.id),
                    memberIds: room.members.map(member => member.id)
                }
            };
        }
    },
    schema: new Schema({
        _id: String,
        offset: Number,
        type: { type: String, enum: ['direct', 'group'] },
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
