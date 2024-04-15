import { sortNumbers } from './solution.js';

const originalArray = [8, 4, 6];
const sorted = sortNumbers(originalArray);

describe('sort numbers of an array', () => {
    it('[1.5, 1, -1.5, 0, -1] -> [-1.5, -1, 0, 1, 1.5]', () => {
        expect(sortNumbers([1.5, 1, -1.5, 0, -1])).toEqual([-1.5, -1, 0, 1, 1.5]);
    });
    it('original array is not modified', () => {
        expect(sortNumbers(originalArray)).toEqual(sorted);
    });
    it("doesn't change the original array", () => {
        expect(originalArray).toEqual([8, 4, 6]);
    });
});
