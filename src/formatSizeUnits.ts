/**
 *
 * @param num :size大小;
 * @returns size with unit
 */

export const formatSizeUnits = (num: number) => {
    const unitArr = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let index = 0;
    const n = unitArr.length;

    while (num >= 1024 && index < n - 1) {
        num /= 1024;
        index++;
    }

    return `${index !== 0 ? num.toFixed(2) : num}${unitArr[index]}`;
};

export default formatSizeUnits;
