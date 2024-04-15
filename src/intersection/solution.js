/**
 * Intersection creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} arr1 - The first array to compare value.
 * @param {Array} arr2 - The second array to compare value.
 * @returns {Array} The new array with the values that are in arr1 and arr2.
 */

export const intersection = (arr1 = [], arr2 = []) => {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            if (newArr.includes(arr1[i])) {
                continue;
            } else {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
};
