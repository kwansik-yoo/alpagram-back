import { User } from './user';

export interface Chat {
    id: string;
    regTime: number;
    modTime: number;
    writer: User;
    message: string;
    roomId: string;
}

export interface Room {
    id: string;
    offset: number;
    type: 'direct' | 'group';
}

export interface DirectChatRoom extends Room {
    type: 'direct';
    elice: User;
    bob: User;
}

export interface GroupChatRoom extends Room {
    type: 'group';
    owner: User;
    admins: User[];
    members: User[];
}

export type GenericRoom = DirectChatRoom | GroupChatRoom;

export interface ReadOffset {
    id: string;
    userId: string;
    roomId: string;
    offset: number;
}
