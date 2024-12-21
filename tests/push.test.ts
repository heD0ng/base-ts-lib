import { push } from '../src/index';

describe('push', () => {
    it('should add elements to the end of the array and return the new length', () => {
        const arr = [1, 2, 3];
        const result = push(arr, 4, 5);
        expect(result).toBe(5);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle pushing no arguments and return the original length', () => {
        const arr = [1, 2, 3];
        const result = push(arr);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should handle pushing a single element', () => {
        const arr = [1, 2, 3];
        const result = push(arr, 4);
        expect(result).toBe(4);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should handle pushing multiple types of elements', () => {
        const arr = [1];
        const result = push(arr, 'a', true, null, undefined);
        expect(result).toBe(5);
        expect(arr).toEqual([1, 'a', true, null, undefined]);
    });

    it('should not modify the array and return undefined if the first argument is not an array', () => {
        const notAnArray = {};
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
        const result = push(notAnArray as any, 1, 2);
        expect(result).toBeUndefined();
        expect(warnSpy).toHaveBeenCalledWith('type is not a array');
        warnSpy.mockRestore();
    });

    it('should work with an empty array and add new elements', () => {
        const arr: any[] = [];
        const result = push(arr, 1, 2, 3);
        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should handle pushing no elements to an empty array', () => {
        const arr: any[] = [];
        const result = push(arr);
        expect(result).toBe(0);
        expect(arr).toEqual([]);
    });
});
