import { splitObject } from './solution.js';

describe('split object', () => {
    it('{ a: 1, b: 2, c: 3 } -> [{ a: 1 }, { b: 2 }, { c: 3 }]', () => {
        expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
    });
    it('Empty object -> []', () => {
        expect(splitObject({})).toEqual([]);
    });

    it('{ x: "hello", y: "world" } -> [{ x: "hello" }, { y: "world" }]', () => {
        expect(splitObject({ x: 'hello', y: 'world' })).toEqual([{ x: 'hello' }, { y: 'world' }]);
    });

    it('{ a: 1, b: undefined, c: null } -> [{ a: 1 }, { b: undefined }, { c: null }]', () => {
        // eslint-disable-next-line max-len
        expect(splitObject({ a: 1, b: undefined, c: null })).toEqual([{ a: 1 }, { b: undefined }, { c: null }]);
    });
});
