export const myTypeOf = (data) => {
    if (Array.isArray(data)) {
        return 'array';
    } else if (data === null) {
        return 'null';
    } else if (data === undefined) {
        return 'undefined';
    } else {
        const str = Object.prototype.toString.call(data);
        const arr = str.split(' ');
        return arr[1].slice(0, -1);
    }
};

export default myTypeOf;
