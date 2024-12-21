/**
 *
 * @param container :外层容器
 * @param items :类名 | 子元素列表
 * @param columns ：列数
 * @param gap ：间距
 */
export const computeWaterfallFlowLayout = (
    container: string | HTMLElement,
    items: string | HTMLElement[],
    columns = 2,
    gap = 10
) => {
    if (typeof container === 'string') {
        container = document.querySelector(container) as unknown as HTMLElement;
    }
    if (typeof items === 'string') {
        items = Array.from(document.querySelectorAll(items));
    }

    const heights = new Array(columns).fill(0);

    items.forEach((item, index) => {
        const column = index % columns;

        const x = column * item.offsetWidth + gap;
        const y = heights[column];

        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        heights[column] += item.offsetHeight + gap;
    });
    const maxHeight = Math.max(...heights);
    container.style.height = `${maxHeight}px`;

    return maxHeight;
};
export default computeWaterfallFlowLayout;
