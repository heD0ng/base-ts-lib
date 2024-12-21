import { retry } from '../src/index';

describe('retry function', () => {
    test('should call the function only once if it succeeds on the first try', async () => {
        const mockFn = jest.fn().mockResolvedValue('success');
        const result = await retry(mockFn, 3);
        expect(result).toBe('success');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('should retry the function up to the specified number of times on failure', async () => {
        const mockFn = jest
            .fn()
            .mockRejectedValueOnce(new Error('error'))
            .mockResolvedValueOnce('success');
        const result = await retry(mockFn, 3);
        expect(result).toBe('success');
        expect(mockFn).toHaveBeenCalledTimes(2);
    });

    test('should return false if the function fails after all retries', async () => {
        const mockFn = jest.fn().mockRejectedValue(new Error('error'));
        const result = await retry(mockFn, 3);
        expect(result).toBe(false);
        expect(mockFn).toHaveBeenCalledTimes(3);
    });

    test('should not retry if the number of retries is set to 0', async () => {
        const mockFn = jest.fn().mockRejectedValue(new Error('error'));
        const result = await retry(mockFn, 0);
        expect(result).toBe(false);
        expect(mockFn).toHaveBeenCalledTimes(0);
    });

    test('should correctly handle async functions that resolve after multiple retries', async () => {
        const mockFn = jest
            .fn()
            .mockRejectedValueOnce(new Error('error'))
            .mockRejectedValueOnce(new Error('error'))
            .mockResolvedValueOnce('success');
        const result = await retry(mockFn, 3);
        expect(result).toBe('success');
        expect(mockFn).toHaveBeenCalledTimes(3);
    });

    test('should propagate errors correctly if the function throws synchronously', async () => {
        const mockFn = jest.fn(() => {
            throw new Error('synchronous error');
        });
        const result = await retry(mockFn, 3);
        expect(result).toBe(false);
        expect(mockFn).toHaveBeenCalledTimes(3);
    });
});
