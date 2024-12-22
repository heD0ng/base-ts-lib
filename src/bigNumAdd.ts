/**
 *  @description 大数相加函数
 * @param num1
 * @param num2
 * @returns 大数相加的字符串
 */
export const bigNumAdd = (num1: string, num2: string): string => {
    let res = '';
    const m = num1.length;
    const n = num2.length;

    const maxNum = Math.max(m, n);
    num1 = num1.padStart(maxNum, '0');
    num2 = num2.padStart(maxNum, '0');

    let c = 0;
    for (let i = maxNum - 1; i >= 0; i--) {
        const total = Number(num1[i]) + Number(num2[i]) + c;
        c = Math.floor(total / 10);
        const val = total % 10;
        res = val + res;
    }
    if (c !== 0) {
        res = c + res;
    }
    return res.replace(/^0+/, '') || '0';
};

export default bigNumAdd;
