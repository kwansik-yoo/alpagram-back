import { User } from '../types/user';
import Store from '../store';
import { randomUUID } from 'crypto';

const send = async (
    writer: User,
    message: string,
    roomId: string,
    initial: boolean = false
): Promise<string> => {
    const id = randomUUID().toString();
    await Store.ChatStore.create({
        id,
        regTime: new Date().getTime(),
        modTime: 0,
        writer,
        message,
        roomId
    });

    // FIXME: Event
    if (!initial) {
        await addRoomOffset(roomId);
    }

    return id;
};

const sendFirstDirectMessage = async (
    writer: User,
    message: string,
    receiverId: string
): Promise<string> => {
    const roomId = randomUUID().toString();
    await Store.RoomStore.create({
        id: roomId,
        offset: 0,
        type: 'direct',
        elice: writer,
        bob: { id: receiverId, name: '' }
    });
    // FIXME: Event:DirectRoomCreatedEvent
    await Store.ReadOffsetStore.createAll(
        [writer.id, receiverId].map(id => ({
            id: id.concat('@', roomId),
            userId: id,
            roomId,
            offset: id === writer.id ? 0 : -1
        }))
    );
    await send(writer, message, roomId, true);
    return roomId;
};

const sendFirstGroupMessage = async (
    writer: User,
    message: string,
    memberIds: string[]
): Promise<string> => {
    const roomId = randomUUID().toString();
    await Store.RoomStore.create({
        id: roomId,
        offset: 0,
        type: 'group',
        owner: writer,
        admins: [writer],
        members: [writer].concat(memberIds.map(id => ({ id, name: '' })))
    });
    // FIXME: Event:GroupRoomCreatedEvent
    await Store.ReadOffsetStore.createAll(
        [writer.id, ...memberIds].map(id => ({
            id: id.concat('@', roomId),
            userId: id,
            roomId,
            offset: id === writer.id ? 0 : -1
        }))
    );
    await send(writer, message, roomId, true);
    return roomId;
};

const addRoomOffset = async (roomId: string): Promise<void> => {
    const room = await Store.RoomStore.findById(roomId);
    if (room === null) {
        throw new Error(`Room with id(${roomId}) is not exists.`);
    }
    room.offset++;
    await Store.RoomStore.update(roomId, room);
};

export default {
    send,
    sendFirstDirectMessage,
    sendFirstGroupMessage
};
