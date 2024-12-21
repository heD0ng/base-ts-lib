/**
 * @jest-environment jsdom
 */

import { race } from '../src/index';

describe('promise race function', () => {
    it('should return the fastest item ', async () => {
        const arr = [1, 2, 3, 4];

        const res = await race(arr);
        expect(res).toBe(1);
    });

    it('should return the fastest item ', async () => {
        const arr = [1, 2, 3, 4];
        const arr1 = [] as any;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            const fn = new Promise<number>((resolve) => {
                setTimeout(() => resolve(item), item * 1000);
            });
            arr1.push(fn);
        }

        const res = await race(arr1);
        expect(res).toBe(1);
    });
});
