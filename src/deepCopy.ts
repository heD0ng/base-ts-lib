export const deepCopy = (data, dataMap = new WeakMap()) => {
    if (data === null || typeof data !== 'object') return data;
    if (dataMap.get(data)) {
        return dataMap.get(data);
    }

    const isArray = Array.isArray(data);
    const res = isArray ? [] : {};
    dataMap.set(data, res);
    if (isArray) {
        for (let i = 0; i < data.length; i++) {
            res[i] = deepCopy(data[i], dataMap);
        }
    } else {
        for (const key in data) {
            res[key] = deepCopy(data[key], dataMap);
        }
    }

    return res;
};

export default deepCopy;
