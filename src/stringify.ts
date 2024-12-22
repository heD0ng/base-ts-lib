/**
 * @description json.stringify
 * @param data
 * @returns 序列化后的string
 */
export const stringify = (data: any) => {
    if (data === null) {
        return 'null';
    } else if (typeof data === 'string') {
        return `"${data}"`;
    } else if (typeof data === 'number' || typeof data === 'boolean') {
        return String(data);
    } else if (Array.isArray(data)) {
        return `[${data.map(stringify).join(',')}]`;
    } else {
        const keys = Object.keys(data) || [];
        const arr = keys.map((key) => `"${key}":${stringify(data[key])}`);
        const str = arr.join(',');
        return `{${str}}`;
    }
};

export default stringify;
