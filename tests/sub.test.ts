import { subtract } from '../src/index';

describe('subtract function', () => {
    it('should subtract two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });
});
