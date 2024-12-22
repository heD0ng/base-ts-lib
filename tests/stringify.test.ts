import { stringify } from '../src/index';

describe('json stringify', () => {
    it('should handle null', () => {
        expect(stringify(null)).toBe('null');
    });

    it('should handle strings', () => {
        expect(stringify('hello')).toBe('"hello"');
        expect(stringify('')).toBe('""');
    });

    it('should handle numbers', () => {
        expect(stringify(123)).toBe('123');
        expect(stringify(0)).toBe('0');
        expect(stringify(-456)).toBe('-456');
    });

    it('should handle booleans', () => {
        expect(stringify(true)).toBe('true');
        expect(stringify(false)).toBe('false');
    });

    it('should handle arrays', () => {
        expect(stringify([1, 2, 3])).toBe('[1,2,3]');
        expect(stringify(['a', 'b', 'c'])).toBe('["a","b","c"]');
        expect(stringify([true, false, null])).toBe('[true,false,null]');
    });

    it('should handle empty array', () => {
        expect(stringify([])).toBe('[]');
    });

    it('should handle objects', () => {
        expect(stringify({ a: 1, b: 'hello', c: true })).toBe('{"a":1,"b":"hello","c":true}');
        expect(stringify({})).toBe('{}');
    });

    it('should handle nested objects and arrays', () => {
        const obj = { a: [1, 2, { b: 'hello' }], c: { d: false } };
        expect(stringify(obj)).toBe('{"a":[1,2,{"b":"hello"}],"c":{"d":false}}');
    });

    it('should handle circular references (throws error)', () => {
        const obj: any = { a: 1 };
        obj.b = obj; // Create a circular reference
        expect(() => stringify(obj)).toThrow();
    });
});
