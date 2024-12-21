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
export const call = (fn: Function, obj: any, ...rest) => {
    if (obj === null || obj === undefined) {
        obj = win;
    }
    obj.fn = fn;
    const res = obj.fn(...rest);
    delete obj.fn;
    return res ? res : void 0;
};
export default call;
