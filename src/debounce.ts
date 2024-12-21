/**
 *
 * @param fn :待执行函数
 * @param delay ：延迟
 * @returns
 */
export const debounce = (fn, delay = 500) => {
    let timer = null as any;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay);
    };
};

export default debounce;
