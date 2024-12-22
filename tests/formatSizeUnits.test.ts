import { formatSizeUnits } from '../src/index';

describe('formatSizeUnits', () => {
    test('should format bytes correctly', () => {
        expect(formatSizeUnits(500)).toBe('500B');
    });

    test('should format KB correctly', () => {
        expect(formatSizeUnits(1024)).toBe('1.00KB');
        expect(formatSizeUnits(1536)).toBe('1.50KB');
    });

    test('should format MB correctly', () => {
        expect(formatSizeUnits(1048576)).toBe('1.00MB'); // 1024 * 1024
        expect(formatSizeUnits(2097152)).toBe('2.00MB'); // 1024 * 1024 * 2
    });

    test('should format GB correctly', () => {
        expect(formatSizeUnits(1073741824)).toBe('1.00GB'); // 1024^3
        expect(formatSizeUnits(3221225472)).toBe('3.00GB'); // 1024^3 * 3
    });

    test('should format TB correctly', () => {
        expect(formatSizeUnits(1099511627776)).toBe('1.00TB'); // 1024^4
    });

    test('should format PB correctly', () => {
        expect(formatSizeUnits(1125899906842624)).toBe('1.00PB'); // 1024^5
    });

    test('should handle edge cases for large values', () => {
        expect(formatSizeUnits(1125899906842624 * 2)).toBe('2.00PB'); // Large PB value
    });

    test('should handle edge cases for small values', () => {
        expect(formatSizeUnits(0)).toBe('0B'); // Zero value
        expect(formatSizeUnits(1)).toBe('1B'); // Single byte
    });
});
