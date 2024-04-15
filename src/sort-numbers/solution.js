/**
 * Sort an numbers from smallest to largest.
 *
 * @param {Array} arr - The array of number to sort.
 * @returns {Array} The sorted new array.
 */

export const sortNumbers = (arr = []) => {
    const newArr = [...arr];
    newArr.sort((a, b) => a - b);
    return newArr;
};
