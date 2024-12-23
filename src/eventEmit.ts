export class EventEmit {
    eventMap: Record<string, Function[]>;
    constructor() {
        this.eventMap = {};
    }

    on(type: string, cb: Function) {
        if (!this.eventMap[type]) {
            this.eventMap[type] = [];
        }
        this.eventMap[type].push(cb);
    }

    emit(type, args) {
        if (!this.eventMap[type]) {
            return console.warn('it is not a valid event type!');
        }
        this.eventMap[type].forEach((cb) => cb(args));
    }
    off(type) {
        if (!this.eventMap[type]) {
            return console.warn('it is not a valid event type!');
        }
        this.eventMap[type] = [];
    }

    once(type) {
        if (!this.eventMap[type]) {
            return console.warn('it is not a valid event type!');
        }
        this.eventMap[type].forEach((cb) => cb());
        this.eventMap[type] = [];
    }
}
