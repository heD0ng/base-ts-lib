import { deepCopy } from '../src/index';

test('deepCopy function', () => {
    // 测试基础类型
    expect(deepCopy(1)).toBe(1);
    expect(deepCopy('string')).toBe('string');
    expect(deepCopy(null)).toBe(null);
    expect(deepCopy(undefined)).toBe(undefined);
    expect(deepCopy(true)).toBe(true);

    // 测试数组
    const arr = [1, 2, { a: 3 }, [4, 5]];
    const arrCopy = deepCopy(arr);
    expect(arrCopy).toEqual(arr);
    expect(arrCopy).not.toBe(arr);
    expect(arrCopy[2]).not.toBe(arr[2]);
    expect(arrCopy[3]).not.toBe(arr[3]);

    // 测试对象
    const obj = { a: 1, b: { c: 2 }, d: [3, 4] };
    const objCopy = deepCopy(obj);
    expect(objCopy).toEqual(obj);
    expect(objCopy).not.toBe(obj);
    expect(objCopy.b).not.toBe(obj.b);
    expect(objCopy.d).not.toBe(obj.d);

    // 测试循环引用
    const circularObj: any = { a: 1 };
    circularObj.self = circularObj;
    const circularCopy = deepCopy(circularObj);
    expect(circularCopy).toEqual(circularObj);
    expect(circularCopy).not.toBe(circularObj);
    expect(circularCopy.self).toBe(circularCopy);

    // 测试深层嵌套
    const deepNestedObj = { a: { b: { c: { d: { e: 5 } } } } };
    const deepNestedCopy = deepCopy(deepNestedObj);
    expect(deepNestedCopy).toEqual(deepNestedObj);
    expect(deepNestedCopy).not.toBe(deepNestedObj);
    expect(deepNestedCopy.a.b.c.d).not.toBe(deepNestedObj.a.b.c.d);
});
