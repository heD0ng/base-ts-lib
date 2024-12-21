/**
 * @jest-environment jsdom
 */

import { judgeIsInView } from '../src/index'; // 请根据实际文件路径修改

describe('judge element is in view ', () => {
    let element: Element;

    beforeEach(() => {
        // 模拟一个元素
        document.body.innerHTML = `<div id="test-element" style="height: 100px; width: 100px;"></div>`;
        element = document.getElementById('test-element')!;
    });

    afterEach(() => {
        jest.restoreAllMocks(); // 恢复所有的 mock
    });

    it('should return true when element is completely in view', () => {
        // 模拟 getBoundingClientRect 返回值
        jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            top: 0,
            left: 0,
            bottom: 100,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            toJSON: function () {
                throw new Error('Function not implemented.');
            },
        });

        // 模拟 window 的大小
        global.innerHeight = 200;
        global.innerWidth = 200;

        const result = judgeIsInView(element);
        expect(result).toBe(true);
    });

    it('should return false when element is out of view (top)', () => {
        jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            top: -10,
            left: 0,
            bottom: 90,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            toJSON: function () {
                throw new Error('Function not implemented.');
            },
        });

        global.innerHeight = 200;
        global.innerWidth = 200;

        const result = judgeIsInView(element);
        expect(result).toBe(false);
    });

    it('should return false when element is out of view (left)', () => {
        jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            top: 10,
            left: -10,
            bottom: 110,
            right: 90,
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            toJSON: function () {
                throw new Error('Function not implemented.');
            },
        });

        global.innerHeight = 200;
        global.innerWidth = 200;

        const result = judgeIsInView(element);
        expect(result).toBe(false);
    });

    it('should return false when element is out of view (bottom)', () => {
        jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            top: 150,
            left: 0,
            bottom: 250,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            toJSON: function () {
                throw new Error('Function not implemented.');
            },
        });

        global.innerHeight = 200;
        global.innerWidth = 200;

        const result = judgeIsInView(element);
        expect(result).toBe(false);
    });

    it('should return false when element is out of view (right)', () => {
        jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            top: 0,
            left: 150,
            bottom: 100,
            right: 250,
            width: 100,
            height: 100,
            x: 0,
            y: 0,
            toJSON: function () {
                throw new Error('Function not implemented.');
            },
        });

        global.innerHeight = 200;
        global.innerWidth = 200;

        const result = judgeIsInView(element);
        expect(result).toBe(false);
    });
});
