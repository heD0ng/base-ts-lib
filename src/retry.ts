/**
 * @description 重试函数
 * @param fn 函数
 * @param num 次数
 * @returns 函数运行结果
 */
export const retry = async (fn, num = 3) => {
    try {
        if (num === 0) {
            return false;
        }
        const res = await fn();
        return res;
    } catch (error) {
        return retry(fn, --num);
    }
};

export default retry;
