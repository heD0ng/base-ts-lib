import { RequestQueue } from '../src';

describe('RequestQueue', () => {
    it('should limit the number of concurrent requests', async () => {
        const requestQueue = new RequestQueue(2); // 设置最大并发数为 2
        const results: number[] = []; // 用于记录每个请求的执行顺序

        const makeRequest = (id: number): Promise<void> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    results.push(id); // 记录请求的 ID
                    resolve();
                }, Math.random() * 1000); // 随机延时
            });
        };

        // 将 5 个请求加入队列
        for (let i = 1; i <= 5; i++) {
            requestQueue.enqueue(() => makeRequest(i));
        }

        // 等待所有请求完成
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // 检查并发请求的限制
        expect(results.length).toBe(5); // 确保有 5 个请求
        expect(results.slice(0, 2).every((id) => id <= 2)).toBe(true); // 前两个请求的 ID 小于等于 2
        expect(results.slice(2, 4).every((id) => id >= 2 && id <= 4)).toBe(true); // 第三个和第四个请求的 ID 大于 2
        expect(results.slice(4).every((id) => id >= 4)).toBe(true); // 最后两个请求的 ID 大于 4
    });

    it('should handle failed requests without affecting other requests', async () => {
        const requestQueue = new RequestQueue(2);
        const results: string[] = [];

        // 模拟一个延时的请求，部分请求失败
        const makeRequest = (id: number): Promise<void> => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (id === 3) {
                        reject(new Error(`Request ${id} failed`)); // 第 3 个请求失败
                    } else {
                        results.push(`Request ${id} succeeded`); // 记录成功的请求
                        resolve();
                    }
                }, Math.random() * 1000);
            });
        };

        // 将 5 个请求加入队列
        for (let i = 1; i <= 5; i++) {
            requestQueue.enqueue(() => makeRequest(i));
        }

        // 等待所有请求完成
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // 检查结果
        expect(results.length).toBe(4); // 只有 4 个请求成功
        expect(results).toContain('Request 1 succeeded');
        expect(results).toContain('Request 2 succeeded');
        expect(results).toContain('Request 4 succeeded');
        expect(results).toContain('Request 5 succeeded');
    });
});
