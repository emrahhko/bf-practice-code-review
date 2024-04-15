import { difference } from './solution.js';

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 6];
const arr3 = [2, 4, 6, 8];
const arr4 = [1, 3, 5, 1, 2];
const arr5 = [];
const arr6 = [1, 2, 3];

describe('filter array', () => {
    it(' [2, 1], [2, 3]) =>  [1]', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
    it('[1, 2, 3, 4, 5], [3, 4, 6] -> [1, 2, 5]', () => {
        expect(difference(arr1, arr2)).toEqual([1, 2, 5]);
    });
    it('[1, 3, 5, 1, 2], [3, 4, 6] => [1, 5, 2]', () => {
        expect(difference(arr4, arr2)).toEqual([1, 5, 2]);
    });
    it('with an empty array as a 1st argument -> []', () => {
        expect(difference(arr5, arr1)).toEqual([]);
    });
    it('[2, 4, 6, 8], [1, 2, 3] => [4, 6, 8]', () => {
        expect(difference(arr3, arr6)).toEqual([4, 6, 8]);
    });
    it("[1, 'a', 2, 3, 'b', 4, 'a', 1, 'a'] [2, 'b', 3, 4, 7]", () => {
        expect(difference([1, 'a', 2, 3, 'b', 4, 'a', 1, 'a'], [2, 'b', 3, 4, 7])).toEqual([1, 'a']);
    });
});
