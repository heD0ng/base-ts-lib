import { myTypeOf } from '../src/index';

describe('my typeof function', () => {
    test('should correctly identify arrays', () => {
        expect(myTypeOf([])).toBe('array');
        expect(myTypeOf([1, 2, 3])).toBe('array');
    });

    test('should correctly identify null', () => {
        expect(myTypeOf(null)).toBe('null');
    });

    test('should correctly identify undefined', () => {
        expect(myTypeOf(undefined)).toBe('undefined');
    });

    test('should correctly identify objects', () => {
        expect(myTypeOf({})).toBe('Object');
        expect(myTypeOf({ a: 1 })).toBe('Object');
    });

    test('should correctly identify strings', () => {
        expect(myTypeOf('')).toBe('String');
        expect(myTypeOf('hello')).toBe('String');
    });

    test('should correctly identify numbers', () => {
        expect(myTypeOf(42)).toBe('Number');
        expect(myTypeOf(NaN)).toBe('Number'); // NaN is still of type 'number'
    });

    test('should correctly identify booleans', () => {
        expect(myTypeOf(true)).toBe('Boolean');
        expect(myTypeOf(false)).toBe('Boolean');
    });

    test('should correctly identify functions', () => {
        expect(myTypeOf(() => {})).toBe('Function');
        expect(myTypeOf(function () {})).toBe('Function');
    });

    test('should correctly identify symbols', () => {
        expect(myTypeOf(Symbol('symbol'))).toBe('Symbol');
    });

    test('should correctly identify BigInt', () => {
        expect(myTypeOf(BigInt(42))).toBe('BigInt');
    });

    test('should correctly identify dates', () => {
        expect(myTypeOf(new Date())).toBe('Date');
    });

    test('should correctly identify regular expressions', () => {
        expect(myTypeOf(/abc/)).toBe('RegExp');
    });

    test('should correctly identify errors', () => {
        expect(myTypeOf(new Error())).toBe('Error');
    });

    test('should correctly identify other built-in types', () => {
        expect(myTypeOf(new Map())).toBe('Map');
        expect(myTypeOf(new Set())).toBe('Set');
        expect(myTypeOf(new WeakMap())).toBe('WeakMap');
        expect(myTypeOf(new WeakSet())).toBe('WeakSet');
    });
});
