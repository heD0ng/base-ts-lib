import { flatten } from '../src/index';

describe('flatten', () => {
    it('should flatten a nested array completely by default', () => {
        const arr = [1, [2, [3, [4]]]];
        expect(flatten(arr)).toEqual([1, 2, 3, 4]);
    });

    it('should flatten a nested array to a specified depth', () => {
        const arr = [1, [2, [3, [4]]]];
        expect(flatten(arr, 1)).toEqual([1, 2, [3, [4]]]);
        expect(flatten(arr, 2)).toEqual([1, 2, 3, [4]]);
    });

    it('should return the same array if depth is 0', () => {
        const arr = [1, [2, [3, [4]]]];
        expect(flatten(arr, 0)).toEqual(arr);
    });

    it('should handle arrays without nested elements', () => {
        const arr = [1, 2, 3, 4];
        expect(flatten(arr)).toEqual([1, 2, 3, 4]);
    });

    it('should handle an empty array', () => {
        const arr: any[] = [];
        expect(flatten(arr)).toEqual([]);
    });

    it('should handle deeply nested empty arrays', () => {
        const arr = [1, [2, [], [3, []]], []];
        expect(flatten(arr)).toEqual([1, 2, 3]);
    });

    it('should handle non-array values correctly', () => {
        const arr = [1, 'a', [true, [null, [undefined]]]];
        expect(flatten(arr)).toEqual([1, 'a', true, null, undefined]);
    });
});
