export const lazyLoad = (container: string | Element, imgItem: string | Element[]) => {
    if (typeof container === 'string') {
        container = document.querySelector(container);
    }
    if (typeof imgItem === 'string') {
        imgItem = container.querySelectorAll(imgItem) as unknown as Element[];
    }
    if (!('IntersectionObserver' in window)) {
        console.error('IntersectionObserver is not supported in this browser.');
        return;
    }
    const observer = new IntersectionObserver((items) => {
        items.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const url = img.getAttribute('data-src');
                img.setAttribute('src', url);
                observer.unobserve(img);
            }
        });
    });

    imgItem.forEach((img) => {
        observer.observe(img);
    });
};

export default lazyLoad;
