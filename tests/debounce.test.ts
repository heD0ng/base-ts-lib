import { debounce } from '../src/index';

jest.useFakeTimers(); // 使用 Jest 的计时器模拟

describe('debounce', () => {
    it('should call the function once after the delay', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 500);

        // 触发多次调用
        debouncedFn();
        debouncedFn();
        debouncedFn();

        // 快进时间到延迟时间之前
        jest.advanceTimersByTime(499);
        expect(mockFn).not.toHaveBeenCalled(); // 确保未调用

        // 快进时间到延迟时间
        jest.advanceTimersByTime(1);
        expect(mockFn).toHaveBeenCalledTimes(1); // 确保只调用了一次
    });

    it('should reset the timer if called within the delay', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 500);

        // 第一次调用
        debouncedFn();
        jest.advanceTimersByTime(300);

        // 再次调用，重置计时器
        debouncedFn();
        jest.advanceTimersByTime(300);
        expect(mockFn).not.toHaveBeenCalled(); // 确保未调用

        // 最终完成延迟
        jest.advanceTimersByTime(200);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('should call the function with correct arguments and context', () => {
        const mockFn = jest.fn();
        const context = { value: 42 };
        const debouncedFn = debounce(function (this: any, ...args) {
            mockFn(this, ...args);
        }, 500);

        // 调用函数
        debouncedFn.call(context, 'arg1', 'arg2');
        jest.advanceTimersByTime(500);

        // 检查参数和上下文
        expect(mockFn).toHaveBeenCalledWith(context, 'arg1', 'arg2');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
