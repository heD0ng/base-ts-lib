import { getParams } from '../src/index';

describe('getParams', () => {
    it('should return the correct value for a given query parameter', () => {
        const url = 'https://example.com?name=John&id=123&type=admin';
        expect(getParams(url, 'id')).toBe('123');
        expect(getParams(url, 'name')).toBe('John');
        expect(getParams(url, 'type')).toBe('admin');
    });

    it('should return undefined if the parameter is not in the URL', () => {
        const url = 'https://example.com?name=John&type=admin';
        expect(getParams(url, 'id')).toBeUndefined();
    });

    it('should return undefined for an empty query string', () => {
        const url = 'https://example.com';
        expect(getParams(url, 'id')).toBeUndefined();
    });

    it('should handle URLs with duplicate keys and return the last value', () => {
        const url = 'https://example.com?id=123&id=456';
        expect(getParams(url, 'id')).toBe('456');
    });

    it('should correctly decode URL-encoded parameters', () => {
        const url = 'https://example.com?name=John%20Doe&id=123';
        expect(getParams(url, 'name')).toBe('John%20Doe');
        expect(decodeURIComponent(getParams(url, 'name')!)).toBe('John Doe');
    });

    it('should handle invalid URLs gracefully', () => {
        const url = 'invalid-url';
        expect(getParams(url, 'id')).toBeUndefined();
    });

    it('should handle URLs with no "?" or "&" correctly', () => {
        const url = 'https://example.com';
        expect(getParams(url, 'name')).toBeUndefined();
    });
});
