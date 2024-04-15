import { intersection } from './solution.js';

describe('compare two array an keep the same value in a new array', () => {
    it(' [2, 1], [2, 3] -> [2]', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });
    it(" ['a', 'b', 'c', 'a', 'c'], ['a', 'c'] -> ['a', 'c']", () => {
        expect(intersection(['a', 'b', 'c', 'a', 'c'], ['a', 'c'])).toEqual(['a', 'c']);
    });
    it('[1, 2, 3, 1, 4, 5, 61], [1, 4, 7, 61] -> [1, 4, 61]', () => {
        expect(intersection([1, 2, 3, 1, 4, 5, 61], [1, 4, 7, 61])).toEqual([1, 4, 61]);
    });
    it('first argument is an empty array', () => {
        expect(intersection([], [1, 2, 3])).toEqual([]);
    });
    it('second argument is an empty array', () => {
        expect(intersection([1,2,3], [])).toEqual([]);
    });
});
