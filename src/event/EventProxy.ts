import EventEmitter from 'events';
import { DomainEvent } from './types';

class EventProxy {
    private static _intance: EventProxy;
    private readonly emitter: EventEmitter;

    static get instance (): EventProxy {
        if (EventProxy._intance === undefined) {
            EventProxy._intance = new EventProxy();
        }
        return EventProxy._intance;
    }

    constructor () {
        this.emitter = new EventEmitter();
    }

    publish<T> (event: DomainEvent<T>): void {
        console.log('event published....', event);
        this.emitter.emit(event.key, event.payload);
    }

    subscribe<T extends DomainEvent<any>> (key: string, callback: (payload: T['payload']) => Promise<void>): void {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        this.emitter.on(key, callback);
    };
}

export default EventProxy.instance;
