/**
 *  @description promise.all
 * @param arr: promise list
 */
export const all = (arr: any[]) => {
    const res = [];
    let count = 0;
    const n = arr.length;

    return new Promise((resolve, reject) => {
        if (n === 0) resolve([]);
        arr.forEach((item, i) => {
            Promise.resolve(item)
                .then((data) => {
                    res[i] = data;
                    count++;
                    if (count === n) {
                        resolve(res);
                    }
                })
                .catch((reason) => {
                    reject(reason);
                });
        });
    });
};

export default all;
