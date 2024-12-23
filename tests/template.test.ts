import { templateRender } from '../src/index';

describe('templateRender', () => {
    test('should replace placeholders with data values', () => {
        const template = 'Hello, {{ name }}!';
        const data = { name: 'Alice' };
        expect(templateRender(template, data)).toBe('Hello, Alice!');
    });

    test('should handle multiple placeholders', () => {
        const template = 'Name: {{ name }}, Age: {{ age }}';
        const data = { name: 'Bob', age: 30 };
        expect(templateRender(template, data)).toBe('Name: Bob, Age: 30');
    });

    test('should handle extra spaces in placeholders', () => {
        const template = 'Hello, {{   name  }}!';
        const data = { name: 'Charlie' };
        expect(templateRender(template, data)).toBe('Hello, Charlie!');
    });

    test('should leave unmatched placeholders unchanged', () => {
        const template = 'Hello, {{ name }}! Your job is {{ job }}.';
        const data = { name: 'Diana' };
        expect(templateRender(template, data)).toBe('Hello, Diana! Your job is undefined.');
    });

    test('should work with empty data object', () => {
        const template = 'Hello, {{ name }}!';
        const data = {};
        expect(templateRender(template, data)).toBe('Hello, undefined!');
    });

    test('should handle templates without placeholders', () => {
        const template = 'No placeholders here.';
        const data = { name: 'Eve' };
        expect(templateRender(template, data)).toBe('No placeholders here.');
    });

    test('should handle numeric values in data', () => {
        const template = 'Your score is {{ score }}.';
        const data = { score: 100 };
        expect(templateRender(template, data)).toBe('Your score is 100.');
    });

    test('should handle special characters in data', () => {
        const template = 'Hello, {{ name }}!';
        const data = { name: 'F@!$#' };
        expect(templateRender(template, data)).toBe('Hello, F@!$#!');
    });

    test('should return the original string if no placeholders are present', () => {
        const template = 'Static content only.';
        const data = { key: 'value' };
        expect(templateRender(template, data)).toBe('Static content only.');
    });
});
