/**
 * @jest-environment jsdom
 */

import { call } from '../src/index';

describe('my call function', () => {
    it('should return correct value', () => {
        const data = {
            a: 1,
        };
        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
            return total + this.a;
        }
        const res = call(fn, data, 1, 2, 3, 4);
        expect(res).toBe(11);
    });

    it('should return correct value in window', () => {
        const data = {
            a: 1,
        };

        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
            return total + this.a;
        }
        const res = call(fn, null, 1, 2, 3, 4);
        expect(res).toBe(21);
    });

    it('should return void 0', () => {
        const data = {
            a: 1,
        };

        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
        }
        const res = call(fn, null, 1, 2, 3, 4);
        expect(res).toBe(void 0);
    });
});
