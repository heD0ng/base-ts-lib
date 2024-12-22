import { bigNumAdd } from '../src/index';

describe('bigNumAdd', () => {
    it('should add two small numbers correctly', () => {
        expect(bigNumAdd('123', '456')).toBe('579');
    });

    it('should handle numbers with different lengths', () => {
        expect(bigNumAdd('123', '7890')).toBe('8013');
    });

    it('should add numbers with carry-over', () => {
        expect(bigNumAdd('999', '1')).toBe('1000');
    });

    it('should add numbers with multiple carry-overs', () => {
        expect(bigNumAdd('9999', '9999')).toBe('19998');
    });

    it('should add numbers with leading zeros', () => {
        expect(bigNumAdd('000123', '000456')).toBe('579');
    });

    it('should handle very large numbers', () => {
        const num1 = '987654321987654321987654321';
        const num2 = '123456789123456789123456789';
        const result = '1111111111111111111111111110';
        expect(bigNumAdd(num1, num2)).toBe(result);
    });

    it('should handle adding zero to a number', () => {
        expect(bigNumAdd('0', '12345')).toBe('12345');
        expect(bigNumAdd('12345', '0')).toBe('12345');
    });

    it('should return "0" when both numbers are zero', () => {
        expect(bigNumAdd('0', '0')).toBe('0');
    });

    it('should handle single-digit numbers', () => {
        expect(bigNumAdd('5', '7')).toBe('12');
    });

    it('should handle edge case where carry is added to the result', () => {
        expect(bigNumAdd('999', '999')).toBe('1998');
    });
});
