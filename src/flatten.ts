/**
 * @description flatten arr
 * @param arr: 数组
 * @param depth：层数
 * @returns 铺平后的数据
 */
export const flatten = (arr: any[], depth = Infinity) => {
    if (depth <= 0) return arr;
    const res = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...flatten(item, depth - 1));
        } else {
            res.push(item);
        }
    }

    return res;
};

export default flatten;
