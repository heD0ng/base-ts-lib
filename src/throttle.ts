/**
 *
 * @param fn :待执行函数
 * @param delay ：延迟
 * @returns
 */
export const throttle = (fn, delay = 500) => {
    let lastTime = 0; // 记录上一次函数执行的时间

    return function (...args) {
        const now = Date.now();

        if (now - lastTime >= delay) {
            lastTime = now;
            fn.call(this, ...args);
        }
    };
};

export default throttle;
