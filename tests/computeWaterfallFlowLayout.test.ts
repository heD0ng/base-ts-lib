/**
 * @jest-environment jsdom
 */

import { computeWaterfallFlowLayout } from '../src/index';

describe('compute waterfall flow layout', () => {
    let container: HTMLElement | string = 'container';

    beforeEach(() => {
        document.body.innerHTML = `<div class='container' style='width:1000px'><div class='item' style='width:480px;height:320px;'>1</div><div class='item' style='width:480px;height:340px;'>2</div></div>`;
        container = document.querySelector('.container')! as HTMLElement;

        const items = document.querySelectorAll('.item');
        items.forEach((item, index) => {
            // 模拟元素宽度和高度
            Object.defineProperty(item, 'offsetHeight', { value: index === 0 ? 320 : 340 });
            Object.defineProperty(item, 'offsetWidth', { value: 480 });
        });
    });

    afterEach(() => {
        jest.restoreAllMocks(); // 恢复所有的 mock
    });

    it('1:should calculate the correct layout height', (done) => {
        const result = computeWaterfallFlowLayout(container, '.item');
        expect(result).toBe(350); // 期望结果：两项一个列中，总高度是 340px
        done();
    });

    it('2:should calculate the correct layout height', (done) => {
        const items1 = document.querySelectorAll('.item')! as unknown as HTMLElement[];
        const result = computeWaterfallFlowLayout(container, items1);
        expect(result).toBe(350); // 期望结果：两项一个列中，总高度是 340px
        done();
    });
});
