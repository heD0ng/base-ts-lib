/**
 * @param arr :数组
 * @param args ：参数
 * @returns 新数组的长度
 */
export const push = (arr: any[], ...args) => {
    if (!Array.isArray(arr)) {
        return console.warn('type is not a array');
    }

    const l = args.length;
    for (let i = 0; i < l; i++) {
        const item = args[i];
        arr[arr.length] = item;
    }

    return arr.length;
};

export default push;
