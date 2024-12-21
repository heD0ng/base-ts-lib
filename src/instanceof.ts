export const judgeInstanceOf = (instance, constructor) => {
    if (instance === null || instance === undefined) return false;
    let proto = instance.__proto__;
    const prototype = constructor.prototype;

    while (proto) {
        if (proto === prototype) return true;
        proto = proto.__proto__;
    }

    return false;
};

export default judgeInstanceOf;
