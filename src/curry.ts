type CurriedFunction = {
    (...args2: any[]): CurriedFunction | number; // 函数可以返回自身或最终结果
    valueOf(): number; // 支持隐式转换为数字
};
const add = (arr: number[]) => {
    return arr.reduce((p, c) => p + c, 0);
};

export const curry = function (...args1): any {
    let args = [].concat(args1);
    const tmp: CurriedFunction = function (...args2) {
        if (args2.length > 0) {
            args = args.concat(args2);
            return tmp;
        } else {
            return add(args);
        }
    };
    tmp.valueOf = function () {
        if (!args || args.length === 0) {
            args = null;
            return 0;
        }
        const res = add(args);
        args = null;
        return res;
    };
    return tmp;
};

export default curry;
