import { thousandsConvert } from '../src/index';

describe('thousandsConvert', () => {
    test('正整数的千分位转换', () => {
        expect(thousandsConvert(1234)).toBe('1,234');
        expect(thousandsConvert(1234567)).toBe('1,234,567');
    });

    test('带小数的正数千分位转换', () => {
        expect(thousandsConvert(1234.567)).toBe('1,234.567');
        expect(thousandsConvert(123456.78)).toBe('123,456.78');
    });

    test('负整数的千分位转换', () => {
        expect(thousandsConvert(-1234)).toBe('-1,234');
        expect(thousandsConvert(-1234567)).toBe('-1,234,567');
        expect(thousandsConvert(-123456.78)).toBe('-123,456.78');
    });

    test('带小数的负数千分位转换', () => {
        expect(thousandsConvert(-1234.567)).toBe('-1,234.567');
        expect(thousandsConvert(-1234567.89)).toBe('-1,234,567.89');
    });

    test('较大数值的千分位转换', () => {
        expect(thousandsConvert(9876543210)).toBe('9,876,543,210');
        expect(thousandsConvert(-9876543210)).toBe('-9,876,543,210');
    });

    test('数值为0的转换', () => {
        expect(thousandsConvert(0)).toBe('0');
        expect(thousandsConvert(-0)).toBe('0'); // JavaScript 中 -0 等于 0
    });

    test('整数边界的转换', () => {
        expect(thousandsConvert(1)).toBe('1');
        expect(thousandsConvert(123)).toBe('123');
        expect(thousandsConvert(1234)).toBe('1,234');
    });
});
