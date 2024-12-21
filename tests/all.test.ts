/**
 * @jest-environment jsdom
 */

import { all } from '../src/index';

describe('promise call function', () => {
    test('should resolve all promises with their results in order', async () => {
        const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

        const result = await all(promises);
        expect(result).toEqual([1, 2, 3]); // 确保结果顺序正确
    });

    test('should work with mixed values and promises', async () => {
        const inputs = [Promise.resolve(1), 2, Promise.resolve(3)];
        const result = await all(inputs);
        expect(result).toEqual([1, 2, 3]);
    });

    test('should reject if any promise rejects', async () => {
        const promises = [
            Promise.resolve(1),
            Promise.reject(new Error('Rejected promise')),
            Promise.resolve(3),
        ];

        await expect(all(promises)).rejects.toThrow('Rejected promise');
    });

    test('should resolve empty array', async () => {
        const result = await all([]);
        expect(result).toEqual([]); // 空数组应返回空结果
    });

    test('should resolve non-promise values', async () => {
        const inputs = [1, 'string', true, null];
        const result = await all(inputs);
        expect(result).toEqual([1, 'string', true, null]); // 非 Promise 值应直接返回
    });

    test('should handle a single promise', async () => {
        const result = await all([Promise.resolve(42)]);
        expect(result).toEqual([42]); // 单个 Promise 也应处理正确
    });

    test('should handle mixed delayed promises', async () => {
        const promises = [
            new Promise((resolve) => setTimeout(() => resolve(1), 100)),
            new Promise((resolve) => setTimeout(() => resolve(2), 50)),
            Promise.resolve(3),
        ];

        const result = await all(promises);
        expect(result).toEqual([1, 2, 3]); // 确保延迟处理后的顺序正确
    });
});
