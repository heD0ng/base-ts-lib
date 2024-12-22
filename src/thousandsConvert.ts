/**
 * @description 将数字进行千分位转化
 * @param num ：数字
 * @returns 千分位数字
 */
export const thousandsConvert = (num: number) => {
    if (num == 0 && typeof num === 'number') return '0';
    let [integer, decimal] = Math.abs(num).toString().split('.');
    let res = '';
    let count = 0;

    for (let i = integer.length - 1; i >= 0; i--) {
        res = integer[i] + res;
        count++;
        if (count === 3 && i !== 0) {
            res = ',' + res;
            count = 0;
        }
    }

    if (decimal) {
        res += '.' + decimal;
    }

    return num > 0 ? res : '-' + res;
};

export default thousandsConvert;
