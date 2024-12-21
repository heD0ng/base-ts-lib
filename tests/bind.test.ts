/**
 * @jest-environment jsdom
 */

import { bind } from '../src/index';

describe('bind function', () => {
    it('should return correct value', () => {
        const data = {
            a: 1,
        };
        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
            return total + this.a;
        }
        const fn1 = bind(fn, data, 1, 2, 3, 4);
        const res = fn1();
        expect(res).toBe(11);
    });

    it('should return correct value', () => {
        const data = {
            a: 1,
        };
        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
            return total + this.a;
        }
        const fn1 = bind(fn, data, 1, 2, 3, 4);
        const res = fn1(5, 6);
        expect(res).toBe(22);
    });

    it('should return correct value in window', () => {
        const data = {
            a: 1,
        };

        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
            return total + this.a;
        }
        const fn1 = bind(fn, null, 1, 2, 3, 4);
        const res = fn1();
        expect(res).toBe(21);
    });

    it('should return void 0', () => {
        const data = {
            a: 1,
        };

        function fn(...rest) {
            const total = rest.reduce((p, c) => p + c, 0);
        }
        const fn1 = bind(fn, null, 1, 2, 3, 4);
        const res = fn1();
        expect(res).toBe(void 0);
    });
});
