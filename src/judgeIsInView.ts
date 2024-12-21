export const judgeIsInView = (el: string | Element) => {
    try {
        if (typeof el === 'string') {
            el = document.querySelector(el);
        }

        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const { bottom, left, top, right } = el.getBoundingClientRect();

        return top >= 0 && left >= 0 && bottom <= windowHeight && right <= windowWidth;
    } catch (error) {
        return false;
    }
};
