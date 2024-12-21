import { curry } from '../src/index';

describe('curry function', () => {
    test('should return a function initially', () => {
        const curriedAdd = curry(1);
        expect(typeof curriedAdd).toBe('function');
    });

    test('should correctly sum numbers when passed all at once', () => {
        const curriedAdd = curry(1, 2, 3, 4);
        expect(curriedAdd()).toBe(10); // 1 + 2 + 3 + 4
    });

    test('should correctly sum numbers when passed incrementally', () => {
        const curriedAdd = curry(1)(2)(3)(4);
        expect(curriedAdd()).toBe(10); // 1 + 2 + 3 + 4
    });

    test('should correctly sum when mixed calls are used', () => {
        const curriedAdd = curry(1, 2)(3)(4);
        expect(curriedAdd()).toBe(10); // 1 + 2 + 3 + 4
    });

    test('should return 0 if called without arguments', () => {
        const curriedAdd = curry();
        expect(curriedAdd()).toBe(0);
    });

    test('should handle negative numbers correctly', () => {
        const curriedAdd = curry(-1, -2)(-3)(-4);
        expect(curriedAdd()).toBe(-10); // -1 - 2 - 3 - 4
    });

    test('should handle a mix of positive and negative numbers', () => {
        const curriedAdd = curry(1, -2)(3)(-4);
        expect(curriedAdd()).toBe(-2); // 1 - 2 + 3 - 4
    });

    test('should return the result using .valueOf()', () => {
        const curriedAdd = curry(1, 2, 3, 4);
        expect(Number(curriedAdd)).toBe(10); // Calls valueOf implicitly
    });

    test('should reset args after .valueOf() call', () => {
        const curriedAdd = curry(1, 2, 3, 4);
        expect(Number(curriedAdd)).toBe(10); // First call
        expect(Number(curriedAdd)).toBe(0); // args reset, returns 0
    });

    test('should support multiple chained calls with mixed arguments', () => {
        const curriedAdd = curry(1)(2, 3)(4);
        expect(curriedAdd()).toBe(10); // 1 + 2 + 3 + 4
        curriedAdd(5)(6);
        expect(curriedAdd()).toBe(21); // Adds 5 + 6 to previous args
    });

    test('should not break on empty calls in between', () => {
        const curriedAdd = curry(1)(2)(3);
        expect(curriedAdd()).toBe(6); // 1 + 2 + 3
    });
});
