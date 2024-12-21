/**
 *
 * @param fn 构造函数
 * @param arg 参数
 */
export const myNew = function (fn, ...arg) {
    const constructor = fn;
    if (typeof constructor !== 'function') {
        console.warn(`${fn} is not a function`);
        return;
    }
    const obj = Object.create(constructor.prototype);
    const res = constructor.call(obj, ...arg);
    return res && typeof res === 'object' ? res : obj;
};

export default myNew;
