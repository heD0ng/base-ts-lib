/**
 * 为H5端部分API提供降级机制:
 * requestIdleCallback => setTimeout;
 */
export const compatibilityApiFallbackFn = () => {
    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (cb: Function, options = { timeout: 500 }) {
            const timeout = options.timeout || 500;
            const timer = setTimeout(() => {
                cb();
                clearTimeout(timer);
            }, timeout);
            return -1;
        };
    }
};

export default compatibilityApiFallbackFn;
