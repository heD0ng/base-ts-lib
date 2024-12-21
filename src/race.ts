/**
 * @description promise.race
 * @param arr 请求列表
 * @returns 最先改变状态的那个请求
 */
export const race = (arr: any[]) => {
    return new Promise((resolve, reject) => {
        arr.forEach((item) => {
            Promise.resolve(item).then(resolve, reject);
        });
    });
};
export default race;
