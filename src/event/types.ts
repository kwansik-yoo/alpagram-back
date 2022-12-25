export interface DomainEvent<T> {
    key: string;
    payload: T;
}

export interface ChatSendEvent extends DomainEvent<{ roomId: string; }> {
    key: 'ChatSendEvent';
};
