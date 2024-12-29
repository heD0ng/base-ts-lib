/**
 * @description 判断两个数据是否全等
 * @param dataA
 * @param dataB
 * @returns boolean
 */

export const isEqual = (dataA: any, dataB: any) => {
    const typeA = typeof dataA;
    const typeB = typeof dataB;
    if (dataA && !dataB) return false;
    if (!dataA && dataB) return false;
    if (typeA !== typeB) {
        return false;
    }
    if (dataA === null && dataB === null) return true;
    if (typeA !== 'object') {
        return dataA === dataB;
    }

    if (Array.isArray(dataA) && Array.isArray(dataB)) {
        const aLen = dataA.length;
        const bLen = dataB.length;
        if (aLen !== bLen) return false;
        for (let i = 0; i < aLen; i++) {
            if (!isEqual(dataA[i], dataB[i])) {
                return false;
            }
        }
    } else {
        const aKeys = Object.keys(dataA);
        const bKeys = Object.keys(dataB);
        if (aKeys.length !== bKeys.length) return false;
        for (const key in dataA) {
            if (dataA.hasOwnProperty(key)) {
                if (!dataB.hasOwnProperty(key)) return false;
                if (!isEqual(dataA[key], dataB[key])) return false;
            }
        }
    }

    return true;
};

export default isEqual;
