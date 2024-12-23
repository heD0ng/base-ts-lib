import { EventEmit } from '../src/index';

describe('EventEmit', () => {
    let emitter: EventEmit;

    beforeEach(() => {
        emitter = new EventEmit();
    });

    test('should register and emit an event', () => {
        const mockFn = jest.fn();
        emitter.on('testEvent', mockFn);

        emitter.emit('testEvent', 'data');
        expect(mockFn).toHaveBeenCalledWith('data');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should handle multiple listeners for the same event', () => {
        const mockFn1 = jest.fn();
        const mockFn2 = jest.fn();

        emitter.on('testEvent', mockFn1);
        emitter.on('testEvent', mockFn2);

        emitter.emit('testEvent', 'data');
        expect(mockFn1).toHaveBeenCalledWith('data');
        expect(mockFn2).toHaveBeenCalledWith('data');
    });

    test('should warn when emitting an invalid event', () => {
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        emitter.emit('invalidEvent', 'data');

        expect(warnSpy).toHaveBeenCalledWith('it is not a valid event type!');
        warnSpy.mockRestore();
    });

    test('should remove all listeners for an event using off()', () => {
        const mockFn = jest.fn();

        emitter.on('testEvent', mockFn);
        emitter.off('testEvent');

        emitter.emit('testEvent', 'data');
        expect(mockFn).not.toHaveBeenCalled();
    });

    test('should warn when removing listeners for an invalid event', () => {
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        emitter.off('invalidEvent');

        expect(warnSpy).toHaveBeenCalledWith('it is not a valid event type!');
        warnSpy.mockRestore();
    });

    test('should call listeners only once for an event using once()', () => {
        const mockFn = jest.fn();

        emitter.on('testEvent', mockFn);
        emitter.once('testEvent');

        emitter.emit('testEvent', 'data');
        emitter.emit('testEvent', 'data');

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should warn when calling once() on an invalid event', () => {
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        emitter.once('invalidEvent');

        expect(warnSpy).toHaveBeenCalledWith('it is not a valid event type!');
        warnSpy.mockRestore();
    });

    test('should allow registering multiple event types independently', () => {
        const mockFn1 = jest.fn();
        const mockFn2 = jest.fn();

        emitter.on('event1', mockFn1);
        emitter.on('event2', mockFn2);

        emitter.emit('event1', 'data1');
        emitter.emit('event2', 'data2');

        expect(mockFn1).toHaveBeenCalledWith('data1');
        expect(mockFn2).toHaveBeenCalledWith('data2');
    });
});
