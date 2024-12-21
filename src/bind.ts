const win = {
    a: 11,
};
/**
 *
 * @param fn :函数
 * @param obj ：this指向的对象
 * @param rest ：参数
 * @returns 函数返回值
 */
export const bind = (fn: Function, obj: any, ...rest) => {
    return function (...rest1) {
        if (obj === null || obj === undefined) {
            obj = win;
        }
        const res = fn.call(obj, ...rest, ...rest1);
        return res ? res : void 0;
    };
};
export default bind;
