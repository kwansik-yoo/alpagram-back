export interface DomainEvent {
    key: string;
    time: number;
    payload: any;
}

export type DomainEventType =
    'domain:signup'

export interface SignUpEvent extends DomainEvent {
    key: 'domain:signup';
    payload: {
        userId: string;
    };
}
