import { flatten } from './solution.js';

const a = ['a', 'b', [1, 2, 3], [4, 5, 6], 'e'];
const b = ['a', ['b', 'c'], ['d', ['e', 'f']], 'g'];
const c = [[1, 2], [3, [4, 5]]];
const d = [[1, [2]], [[3], 4], [5]];

describe('fusion two array to one', () => {
    it(" 'a', 'b', [1, 2, 3,] [4, 5, 6], 'e' -> ['a', 'b', 1, 2, 3, 4, 5, 6], 'e' ", () => {
        expect(flatten(a)).toEqual(['a', 'b', 1, 2, 3, 4, 5, 6, 'e']);
    });
    it('fusion multiple nested arrays into one', () => {
        expect(flatten(b)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
    it('fusion deeply nested arrays into one', () => {
        expect(flatten(c)).toEqual([1, 2, 3, 4, 5]);
    });
    it('fusion arrays with various levels of nesting into one', () => {
        expect(flatten(d)).toEqual([1, 2, 3, 4, 5]);
    });
    it('retun an empty array if the input is an empty array', () => {
        expect(flatten([])).toEqual([]);
    });
});
