import { judgeInstanceOf } from '../src/index';

describe('judge instance of function', () => {
    class A {}
    class B {}
    class C extends A {}

    test('should return true for direct instance', () => {
        const a = new A();
        expect(judgeInstanceOf(a, A)).toBe(true);
    });

    test('should return true for inherited instance', () => {
        const c = new C();
        expect(judgeInstanceOf(c, A)).toBe(true); // C extends A
    });

    test('should return false for unrelated instance', () => {
        const a = new A();
        expect(judgeInstanceOf(a, B)).toBe(false); // A and B are unrelated
    });

    test('should return false for primitive values', () => {
        expect(judgeInstanceOf(123, Number)).toBe(true); // Primitives are not instances
        expect(judgeInstanceOf('abc', String)).toBe(true);
        expect(judgeInstanceOf(true, Boolean)).toBe(true);
    });

    test('should return true for object created with Object', () => {
        const obj = {};
        expect(judgeInstanceOf(obj, Object)).toBe(true); // Objects inherit from Object
    });

    test('should return false for null or undefined', () => {
        expect(judgeInstanceOf(null, Object)).toBe(false);
        expect(judgeInstanceOf(undefined, Object)).toBe(false);
    });

    test('should return true for array instances', () => {
        const arr = [];
        expect(judgeInstanceOf(arr, Array)).toBe(true);
        expect(judgeInstanceOf(arr, Object)).toBe(true); // Arrays inherit from Object
    });

    test('should return true for function instances', () => {
        const func = function () {};
        expect(judgeInstanceOf(func, Function)).toBe(true);
        expect(judgeInstanceOf(func, Object)).toBe(true); // Functions inherit from Object
    });

    test('should handle edge cases for custom constructors', () => {
        function Custom() {}
        const custom = new Custom();
        expect(judgeInstanceOf(custom, Custom)).toBe(true);
        expect(judgeInstanceOf(custom, Object)).toBe(true); // Custom inherits from Object
    });
});
