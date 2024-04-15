/**
 * Flatten merge multidimensional (nested) array into one new (one dimension) array.
 *
 * @param {Array} arr - The array to check if it's multidimensional.
 * @returns {Array} The new array with all the elements into a one dimension array.
 */

export const flatten = (arr = []) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(...flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
